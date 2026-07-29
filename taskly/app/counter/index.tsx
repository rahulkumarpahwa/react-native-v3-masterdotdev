import { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { theme } from "../../themes/theme";
import { Duration, intervalToDuration, isBefore } from "date-fns";
import { TimeSegment } from "../../components/TimeSegment";
import { getFromStorage, saveToStorage } from "../../utils/storage";

// 10 seconds from now :
const frequency = 10 * 1000;

export const countdownStorageKey = "taskly-countdown";

export type PersistedCountdownState = {
  currentNotificationId: string | undefined;
  completedAtTimestamps: number[];
};

type CountDownStatus = {
  isOverdue: boolean;
  distance: Duration;
};

export default function CounterScreen() {
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [countdownState, setCountdownState] =
    useState<PersistedCountdownState>();

  const [status, setStatus] = useState<CountDownStatus>({
    isOverdue: false,
    distance: {},
  });

  const lastCompletedTimeStamp = countdownState?.completedAtTimestamps[0];

  useEffect(() => {
    const init = async () => {
      const value: PersistedCountdownState =
      await getFromStorage(countdownStorageKey);
      setCountdownState(value);
      if (value?.completedAtTimestamps[0] === undefined) {
        setIsLoading(false);
      }
    };
    init();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const timeStamp = lastCompletedTimeStamp
        ? lastCompletedTimeStamp + frequency
        : Date.now() + frequency;
      if (lastCompletedTimeStamp) {
        setIsLoading(false);
      }
      const isOverdue = isBefore(timeStamp, Date.now());
      const distance = intervalToDuration(
        isOverdue
          ? { start: timeStamp, end: Date.now() }
          : {
              start: Date.now(),
              end: timeStamp,
            },
      );
      setStatus({
        isOverdue,
        distance,
      });
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [lastCompletedTimeStamp]);

  if (isLoading) {
    return (
      <View style={styles.activityIndicatorContainer}>
        <ActivityIndicator></ActivityIndicator>
      </View>
    );
  }

  return (
    <View
      style={[
        styles.container,
        status.isOverdue ? styles.containerLate : undefined,
      ]}
    >
      {!status.isOverdue ? (
        <Text style={[styles.heading]}>Thing due in...</Text>
      ) : (
        <Text style={[styles.heading, styles.whiteText]}>Thing overdue by</Text>
      )}
      <View style={styles.row}>
        <TimeSegment
          unit="Days"
          number={status.distance?.days ?? 0}
          textStyle={status.isOverdue ? styles.whiteText : undefined}
        />
        <TimeSegment
          unit="Hours"
          number={status.distance?.hours ?? 0}
          textStyle={status.isOverdue ? styles.whiteText : undefined}
        />
        <TimeSegment
          unit="Minutes"
          number={status.distance?.minutes ?? 0}
          textStyle={status.isOverdue ? styles.whiteText : undefined}
        />
        <TimeSegment
          unit="Seconds"
          number={status.distance?.seconds ?? 0}
          textStyle={status.isOverdue ? styles.whiteText : undefined}
        />
      </View>
      <TouchableOpacity
        onPress={async () => {
          // setStatus((prev) => ({ ...prev, isOverdue: false }));
          const newCountdownState: PersistedCountdownState = {
            currentNotificationId: "sdsddsdsd",
            completedAtTimestamps: countdownState
              ? [Date.now(), ...countdownState.completedAtTimestamps]
              : [Date.now()],
          };
          setCountdownState(newCountdownState);
          await saveToStorage(countdownStorageKey, newCountdownState);
          // timeStamp = Date.now() + 10000;
        }}
        style={styles.button}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>I've done the thing!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colorWhite,
    gap: 12,
  },
  button: {
    backgroundColor: theme.colorBlack,
    borderRadius: 6,
    padding: 8,
  },
  buttonText: {
    textTransform: "uppercase",
    letterSpacing: 1,
    color: theme.colorWhite,
    fontSize: 18,
  },
  text: {
    fontSize: 24,
  },
  counter: {
    fontSize: 24,
    borderWidth: 1,
    borderColor: theme.colorBlack,
    padding: 20,
    borderRadius: 6,
    margin: 10,
  },
  itemButton: {
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 6,
    backgroundColor: theme.colorBlack,
    color: theme.colorWhite,
  },
  row: {
    flexDirection: "row",
    marginBottom: 24,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
    color: theme.colorBlack,
  },
  containerLate: {
    backgroundColor: theme.colorRed,
  },
  whiteText: {
    color: theme.colorWhite,
  },
  activityIndicatorContainer: {
    backgroundColor: theme.colorWhite,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
