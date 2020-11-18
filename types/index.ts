export enum LibraryType {
  Live = "Live",
  OnDemand = "On Demand",
}

export enum Discipline {
  Cycling = "Cycling",
  Strength = "Strength",
  Stretching = "Streching",
  Yoga = "Yoga",
  Cardio = "Cardio",
  Meditation = "Meditation",
  Running = "Running",
  Outdoor = "Outdoor",
  Bootcamp = "Bootcamp",
  Walking = "Walking",
}

export enum StrengthClassType {
  WarmUp = "Warm Up",
  StrengthSkills = "Strength Skills",
  Bodyweight = "Bodyweight",
  FullBody = "Full Body",
  UpperBody = "Upper Body",
  Core = "Core",
  LowerBody = "Lower Body",
  ArmsLightWeights = "Arms & Light Weights",
  StrengthForRunners = "Strength for Runners",
  ResistanceBands = "Resistance Bands",
  Barre = "Barre",
}

export enum YogaClassType {
  Flow = "Flow",
  FocusFlow = "FocusFlow",
  Music = "Music",
  Theme = "Theme",
  Power = "Power",
  SlowFlow = "Slow Flow",
  Restorative = "Restorative",
  FamilyPrePostNatal = "Family & Pre/Postnatal",
  YogaAnywhere = "Yoga Anywhere",
  YogaBasics = "Yoga Basics",
}

export enum MeditationClassType {
  Mindfulness = "Mindfulness",
  RelaxSleep = "Relax & Sleep",
  FitnessFocus = "Fitness Focus",
  Emotions = "Emotions",
  MeditationBasics = "Meditation Basics",
  MeditationAnywhere = "Meditation Anywhere",
  ZenInTen = "Zen in Ten",
  AudioOnly = "Audio Only",
}

export enum CardioClassType {
  WarmUp = "Warm Up",
  Hiit = "HIIT",
  MusicHiit = "Music HIIT",
  Family = "Family",
  DanceCardio = "Dance Cardio",
}

export enum StretchingClassType {
  FullBodyStretch = "Full Body Stretch",
  UpperBodyStretch = "Upper Body Stretch",
  LowerBodyStretch = "Lower Body Stretch",
  PrePostRideStretch = "Pre & Post-Ride Stretch",
  PrePostRunStretch = "Pre & Post-Run Stretch",
}

export enum CyclingClassType {
  Beginner = "Beginner",
  LowImpact = "Low Impact",
  PowerZone = "Power Zone",
  Climb = "Climb",
  LiveDj = "Live DJ",
  Intervals = "Intervals",
  HeartRateZone = "Heart Rate Zone",
  Theme = "Theme",
  Music = "Music",
  Groove = "Groove",
  Metrics = "Metrics",
  ProCyclist = "Pro Cyclist",
  BikeBootcamp = "Bike Bootcamp",
}

export enum OutdoorClassType {
  WarmUpCoolDown = "Warm Up/Cool Down",
  Walking = "Walking",
  Music = "Music",
  Theme = "Theme",
  Endurance = "Endurance",
  Speed = "Speed",
  Intervals = "Intervals",
}

export enum RunningClassType {
  RunningSkills = "Running Skills",
  WarmUpCoolDown = "Warm Up/Cool Down",
  Theme = "Theme",
  Music = "Music",
  Endurance = "Endurance",
  Speed = "Speed",
  Intervals = "Intervals",
  HeartRateZone = "Heart Rate Zone",
}

export enum WalkingClassType {
  WarmUpCoolDown = "Warm Up/Cool Down",
  Music = "Music",
  PowerWalk = "Power Walk",
  Hiking = "Hiking",
  WalkRun = "Walk + Run",
}

export enum BootcampClassType {
  WarmUp = "Warm Up",
  BodyFocus = "Body Focus",
  Bodyweight = "Bodyweight",
  Music = "Music",
  Theme = "Theme",
  LowImpact = "Low Impact",
  HeartRateZone = "Heart Rate Zone",
}

export type ClassType =
  | StrengthClassType
  | YogaClassType
  | MeditationClassType
  | CardioClassType
  | StretchingClassType
  | CyclingClassType
  | OutdoorClassType
  | RunningClassType
  | WalkingClassType
  | BootcampClassType;
