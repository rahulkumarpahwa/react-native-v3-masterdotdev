import { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { countdownStorageKey, PersistedCountdownState } from ".";
import { getFromStorage } from "../../utils/storage";
import { theme } from "../../themes/theme";
import { format } from "date-fns";

export default function History() {
  const [countdownState, setCountdownState] =
    useState<PersistedCountdownState>();

  useEffect(() => {
    const init = async () => {
      const data = await getFromStorage(countdownStorageKey);
      setCountdownState(data);
    };
    init();
  }, [countdownState]);

  const formattedDate = (date: number) =>
    format(new Date(date), "dd MMM yy, EEE, hh:mm a");

  return (
    <FlatList
      style={styles.container}
      data={countdownState?.completedAtTimestamps}
      stickyHeaderIndices={[0]}
      renderItem={({ item }) => (
        <View style={styles.content}>
          <Text style={styles.text}>{formattedDate(item)}</Text>
        </View>
      )}

      ListHeaderComponent={() => {
        return (
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Last Completion TimeStamp</Text>
          </View>
        );
      }}

      ListEmptyComponent={
        <View style={styles.listEmptyContainer}>
          <Text style={styles.text}>No History.</Text>
        </View>
      }
    ></FlatList>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
  },
  text: {
    fontSize: 20,
    backgroundColor: theme.colorLightGrey,
    paddingHorizontal: 26,
    paddingVertical: 10,
    marginVertical: 8,
    textAlign: "center",
    flex: 1,
  },
  content: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
    backgroundColor: theme.colorWhite,
  },
  headerText: {
    fontSize: 20,
    textTransform: "capitalize",
  },
  listEmptyContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 18,
    flex : 1,
  },
});
