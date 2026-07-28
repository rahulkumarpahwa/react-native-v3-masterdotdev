import { useEffect, useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { theme } from "../../themes/theme";
import { useRouter } from "expo-router";
import { Duration, intervalToDuration, isBefore } from "date-fns";
import { TimeSegment } from "../../components/TimeSegment";

// 10 seconds from now :
let timeStamp = Date.now() + 10 * 1000;

type CountDownStatus = {
  isOverdue: boolean;
  distance: Duration;
};

export default function CounterScreen() {
  // const [counter, changeCounter] = useState(0);
  const [status, setStatus] = useState<CountDownStatus>({
    isOverdue: false,
    distance: {},
  });
  const [secondElapsed, setSecondElapsed] = useState(0);

  // const router = useRouter();

  useEffect(() => {
    const intervalId = setInterval(() => {
      const isOverdue = isBefore(timeStamp, Date.now());
      setSecondElapsed((val) => val + 1);
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
  }, []);

  return (
    <View
      style={[
        styles.container,
        status.isOverdue ? styles.containerLate : undefined,
      ]}
    >
      {!status.isOverdue ? (
        <Text style={[styles.heading]}>Thing due in</Text>
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

      {/* <Text style={styles.text}>Counter</Text>
      <Text style={styles.counter}>{counter}</Text>

      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          gap: 20,
        }}
      >
        <TouchableOpacity
          style={styles.itemButton}
          onPress={() => {
            changeCounter((counter) => ++counter);
          }}
          activeOpacity={0.6}
        >
          <Text style={{ color: theme.colorWhite, fontSize: 20 }}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.itemButton}
          onPress={() => {
            changeCounter((counter) => --counter);
          }}
          activeOpacity={0.6}
        >
          <Text style={{ color: theme.colorWhite, fontSize: 20 }}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.itemButton}
          onPress={() => {
            changeCounter(0);
          }}
          activeOpacity={0.6}
        >
          <Text style={{ color: theme.colorWhite, fontSize: 20 }}>Reset</Text>
        </TouchableOpacity> */}

      <TouchableOpacity
        onPress={() => {
          setStatus((prev) => ({ ...prev, isOverdue: false }));
          timeStamp = Date.now() + 10000;
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
});
