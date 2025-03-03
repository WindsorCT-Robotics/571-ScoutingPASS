var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2025",
  "page_title": "571 Scouting<br>Reefscape",
  "pitConfig": "true",
  "prematch": [
    { "name": "Team Number",
      "code": "t",
      "type": "number"
    },
    { "name": "Drivetrain Type",
      "code": "drv",
      "type": "radio",
      "choices": {
        "s": "Swerve<br>",
        "w": "West Coast/Tank<br>",
        "b": "Butterfly/Grashopper<br>",
        "m": "Mechanum<br>",
        "o": "Other Drivtrain (put in comments)"
      },
      "defaultValue": "s"
    },
    { "name": "Coral Pickup",
      "code": "fpu",
      "type": "radio",
      "choices": {
        "s": "Coral Station<br>",
        "f": "Floor<br>",
        "b": "Both<br>",
        "n": "Neither"
      },
      "defaultValue": "n"
    },
    { "name": "Coral Score L1",
      "code": "cl1",
      "type": "bool"
    },
    { "name": "Coral Score L2",
      "code": "cl2",
      "type": "bool"
    },
    { "name": "Coral Score L3",
      "code": "cl3",
      "type": "bool"
    },
    { "name": "Coral Score L4",
      "code": "cl4",
      "type": "bool"
    },
    { "name": "Remove Algae from Reef",
      "code": "dc",
      "type": "bool"
    },
    { "name": "Algae Pickup",
      "code": "fpa",
      "type": "radio",
      "choices": {
        "r": "Reef<br>",
        "f": "Floor<br>",
        "b": "Both<br>",
        "n": "Neither"
      },
      "defaultValue": "n"
    },
    { "name": "Algae Score Net",
      "code": "an",
      "type": "bool"
    },
    { "name": "Algae Score Processor",
      "code": "ap",
      "type": "bool"
    },
    { "name": "Shallow Climb",
      "code": "sc",
      "type": "bool"
    },
    { "name": "Deep Climb",
      "code": "dc",
      "type": "bool"
    },
    { "name": "Move During Auto",
      "code": "mda",
      "type": "bool"
    },
    { "name": "# of Coral Can Score During Auto",
      "code": "csa",
      "type": "counter"
    },
    { "name": "Other Features",
      "code": "of",
      "type": "text",
      "size": 20,
      "maxSize": 250
    },
    { "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 20,
      "maxSize": 250
    }
  ],
  "auton": [
  ],
  "teleop": [
  ],
  "endgame": [
  ],
  "postmatch": [
  ]
}`;
