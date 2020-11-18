export let db: IDBDatabase;

const req = indexedDB.open("PowerZoneTracker", 1);
req.onerror = function openDBError(e) {
  console.error(e);
};

req.onsuccess = function openDBSuccess(e) {
  db = this.result;

  db.onerror = function onDBError(e) {
    console.error(`Database error: ${e}`);
  };

  if (!db.objectStoreNames.contains("workouts")) {
    const workoutStore = db.createObjectStore("workouts", {
      keyPath: "id",
      autoIncrement: true,
    });
    workoutStore.createIndex("timestamp", "workout_timestamp", {
      unique: true,
    });
  }
};
