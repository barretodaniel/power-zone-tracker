import { DragEventHandler, useContext, useState } from "react";
import papaparse from "papaparse";
import { ActionTypes, AppStateContext } from "../pages/_stateManager";
import { ClassType, Discipline, LibraryType, CyclingClassType } from "../types";

type WorkoutParse = {
  "Workout Timestamp": string;
  "Live/On-Demand": LibraryType;
  "Instructor Name": string;
  "Length (minutes)": string;
  "Fitness Discipline": Discipline;
  Type: ClassType;
  Title: string;
  "Class Timestamp": string;
  "Total Output": string;
  "Avg. Watts": string;
  "Avg. Resistance": string;
  "Avg. Cadence (RPM)": string;
  "Avg. Speed (mph)": string;
  "Distance (mi)": string;
  "Calories Burned": string;
  "Avg. Heartrate": string;
  "Avg. Incline": string;
  "Avg. Pace (min/mi)": string;
};

type Workout = {
  workoutTimestamp: number;
  libaryType: LibraryType;
  instructor: string;
  length: number;
  discipline: Discipline;
  classType: ClassType;
  title: string;
  classTimestamp: number;
  totalOutput: number;
  avgWatts: number;
  avgResistance: number;
  avgCadence: number;
  avgSpeed: number;
  distance: number;
  caloriesBurned: number;
  avgHeartrate?: number;
  avgIncline?: number;
  avgPace?: number;
};

export default function DropZone() {
  const [zoneHover, setZoneHover] = useState(false);
  const { dispatch } = useContext(AppStateContext);
  const handleFileDrop: DragEventHandler = (e) => {
    e.preventDefault();

    if (e.dataTransfer.items.length > 0) {
      for (let i = 0; i < e.dataTransfer.items.length; i++) {
        if (e.dataTransfer.items[i].kind === "file") {
          const file = e.dataTransfer.items[i].getAsFile();
          if (file) {
            const workouts: Workout[] = [];
            papaparse.parse<WorkoutParse>(file, {
              header: true,
              step(res) {
                const workout = (res.data as unknown) as WorkoutParse;
                if (workout.Type === CyclingClassType.PowerZone) {
                  workouts.push({
                    workoutTimestamp: Date.parse(workout["Class Timestamp"]),
                    libaryType: workout["Live/On-Demand"],
                    instructor: workout["Instructor Name"],
                    length: parseInt(workout["Length (minutes)"], 10),
                    discipline: workout["Fitness Discipline"],
                    classType: workout["Type"],
                    title: workout.Title,
                    classTimestamp: Date.parse(workout["Class Timestamp"]),
                    totalOutput: parseInt(workout["Total Output"], 10),
                    avgWatts: parseInt(workout["Avg. Watts"], 10),
                    avgResistance: parseInt(workout["Avg. Resistance"], 10),
                    avgCadence: parseInt(workout["Avg. Cadence (RPM)"], 10),
                    avgSpeed: parseFloat(workout["Avg. Speed (mph)"]),
                    distance: parseFloat(workout["Distance (mi)"]),
                    caloriesBurned: parseInt(workout["Calories Burned"]),
                  });
                }
              },
              complete() {
                console.log(workouts);
                dispatch({ type: ActionTypes.GoToOverview });
              },
            });
          }
        }
      }
    }
    setZoneHover(false);
  };

  const handleDragOver: DragEventHandler = (e) => {
    e.preventDefault();
    setZoneHover(true);
  };

  const handleDragLeave: DragEventHandler = (e) => {
    setZoneHover(false);
  };

  return (
    <div
      onDrop={handleFileDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      className={`w-full h-full flex justify-center items-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md transition-colors duration-200 ease-in ${
        zoneHover ? "border-gray-500" : "border-gray-300"
      }`}
    >
      <div className="text-center">
        <svg
          className="mx-auto h-20 w-20 text-gray-400"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l4.65-4.65c.2-.2.51-.2.71 0L17 13h-3z" />
        </svg>
        <p className="mt-1 text-3xl text-gray-600">Drag and drop your file</p>
      </div>
    </div>
  );
}
