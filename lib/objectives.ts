export interface ObjectiveType {
  part: number;
  imageUrl: string;
  initialCode: string;
  objective: string;
  requirements: string[];
  expectedOutput: string;
  hint: string;
  roomNumber: number;
  roomTitle: string;
  roomIntro?: string;
  story: string;
  errorFeedback: string;
  // Developer-only helpers (used in /app/dev-view)
  solutionNotes?: string;
  }
  
  export const objectives: Record<number, Record<number, ObjectiveType>> = {
  1: {
  1: {
  part: 1,
  roomNumber: 1,
  roomTitle: "The Entrance Hall",
  roomIntro: "You wake on a cold tile floor. A scruffy terrier in a tiny detective hat trots up. \"Name's Stack. I can smell the bug already.\"",
  story: "The banner prints the entire list instead of the first word. The door wants a single token.",
  imageUrl: "/Room1.png",
  initialCode: 'words = ["WAKE", "UP", "RAVENCREST,"] print(words)',
  objective: "Print only the first element of the list.",
  requirements: ["Do not change the list", "Use correct indexing", "Print a single word"],
  expectedOutput: "WAKE",
  hint: "Think about where lists begin.",
  solutionNotes: "Index the first element: print(words[0])",
  errorFeedback: "You printed the whole list. Stack tilts his head and sighs like a disappointed linter."
  },
  2: {
  part: 2,
  roomNumber: 1,
  roomTitle: "The Entrance Hall",
  story: "The placard should show the second word, but the pointer is off. Stack sniffs the index and barks once.",
  imageUrl: "/Room1-2.png",
  initialCode: 'words = ["WAKE", "UP", "RAVENCREST,"] print(words[2])',
  objective: "Print only the second element of the list.",
  requirements: ["Do not reorder the list", "Select the right index", "Print a single word"],
  expectedOutput: "UP",
  hint: "Remember how list positions start counting.",
  solutionNotes: "Select index 1: print(words[1])",
  errorFeedback: "Wrong token. The lock expected the second word and you gave it the third."
  },
  3: {
  part: 3,
  roomNumber: 1,
  roomTitle: "The Entrance Hall",
  story: "The name on the arch should be the last token with its comma. You are pointing at the wrong tile.",
  imageUrl: "/Room1-3.png",
  initialCode: 'words = ["WAKE", "UP", "RAVENCREST,"] print(words[0])',
  objective: "Print the last element of the list.",
  requirements: ["Do not modify the words", "Use indexing, not slicing", "Print exactly the last item"],
  expectedOutput: "RAVENCREST,",
  hint: "Reach for the tail of the list.",
  solutionNotes: "Select last item: print(words[-1])",
  errorFeedback: "That was the first tile. The sensor flashed red. Stack covers his eyes with a paw."
  }
  },
  2: {
  1: {
  part: 1,
  roomNumber: 2,
  roomTitle: "Reception",
  roomIntro: "Stack hops onto the counter and taps a dusty nameplate. \"Remember me now. Get the case right.\"",
  story: "The console needs Stack's name in uppercase. Your code whispers instead of shouting.",
  imageUrl: "/Room2.png",
  initialCode: 'name = "Stack" print(name.lower())',
  objective: "Print the name in uppercase.",
  requirements: ["Keep the variable name", "Use a string method", "Do not hardcode the final word"],
  expectedOutput: "STACK",
  hint: "Change its tone without changing its letters.",
  solutionNotes: "Use upper(): print(name.upper())",
  errorFeedback: "Too quiet. The sensor wants uppercase. Stack barks to demonstrate."
  },
  2: {
  part: 2,
  roomNumber: 2,
  roomTitle: "Reception",
  story: "Article check. The panel expects a specific article token. Your lookup is pointing at the wrong drawer.",
  imageUrl: "/Room2.png",
  initialCode: 'articles = {"the": "THE", "a": "A"} print(articles.get("a"))',
  objective: "Print the token for the definite article.",
  requirements: ["Use the dictionary provided", "Do not add new keys", "Select the correct key"],
  expectedOutput: "THE",
  hint: "Ask the cabinet for the definite one.",
  solutionNotes: "Use the 'the' key: print(articles['the']) or .get('the')",
  errorFeedback: "Wrong drawer. You returned A when the lock wanted THE."
  },
  3: {
  part: 3,
  roomNumber: 2,
  roomTitle: "Reception",
  story: "The kennel sticker wants the species, not the whole crate. You lifted the entire container.",
  imageUrl: "/Room2.png",
  initialCode: 'animals = ["DOG", "DETECTIVE,"] print(animals)',
  objective: "Print only the first animal name.",
  requirements: ["Do not change the list", "Index correctly", "Print a single string"],
  expectedOutput: "DOG",
  hint: "Pick the first tag, not the crate.",
  solutionNotes: "Index first element: print(animals[0])",
  errorFeedback: "You dragged the whole list to the scanner. Stack looks offended but patient."
  }
  },
  3: {
  1: {
  part: 1,
  roomNumber: 3,
  roomTitle: "Waiting Room",
  roomIntro: "Stack noses a faded poster. \"Title goes big. Code goes small. Flip it.\"",
  story: "The title should be all caps. Your method only capitalizes the first letter.",
  imageUrl: "/Room3.png",
  initialCode: 'title = "detective," print(title.capitalize())',
  objective: "Print the title in full uppercase.",
  requirements: ["Do not replace the string", "Use a string method", "Keep the comma"],
  expectedOutput: "DETECTIVE,",
  hint: "Make the headline shout, not whisper.",
  solutionNotes: "Use upper(): print(title.upper())",
  errorFeedback: "Half measure. The monitor wants shouting, not polite capitalization."
  },
  2: {
  part: 2,
  roomNumber: 3,
  roomTitle: "Waiting Room",
  story: "The latch is actually open. Your condition says otherwise. Stack squints at the if branch.",
  imageUrl: "/Room3.png",
  initialCode: 'locked = False if locked: print("UNLOCKED") else: print("LOCKED")',
  objective: "Print UNLOCKED when locked is False.",
  requirements: ["Do not change variable value", "Fix the branch logic", "Keep the same two strings"],
  expectedOutput: "UNLOCKED",
  hint: "Consider the opposite condition.",
  solutionNotes: "Flip branch: if not locked: print('UNLOCKED') else: print('LOCKED')",
  errorFeedback: "You declared it locked and locked it. The door laughs in beeps."
  },
  3: {
  part: 3,
  roomNumber: 3,
  roomTitle: "Waiting Room",
  story: "You reversed the order of parts. The sign should read as a single word with a comma.",
  imageUrl: "/Room3.png",
  initialCode: 'parts = ["DOOR", "S,"] print("".join(reversed(parts)))',
  objective: "Join parts in the correct order to form the word.",
  requirements: ["Do not edit the parts", "Avoid reversing", "Join without spaces"],
  expectedOutput: "DOORS,",
  hint: "Join the pieces as-is, no flipping.",
  solutionNotes: "Join without reverse: print(''.join(parts))",
  errorFeedback: "Backward assembly. Stack taps the second tile then the first."
  }
  },
  4: {
  1: {
  part: 1,
  roomNumber: 4,
  roomTitle: "Pharmacy",
  roomIntro: "The next room is a rundown pharmacy. Stack paws at a pill counter. \"Dose matters. Detail matters. Case matters.\"",
  story: "You are filtering for a token but the equality check misses due to case.",
  imageUrl: "/Room4.png",
  initialCode: 'words = ["TRUST", "THE", "DOG"] picked = [] for w in words: if w == "trust": picked.append(w) print(picked[0] if picked else "THE")',
  objective: "Select and print TRU ST only when it matches by case.",
  requirements: ["Keep the words list", "Fix the comparison", "Print the matching token"],
  expectedOutput: "TRUST",
  hint: "Match the case the sign expects.",
  solutionNotes: "Compare uppercase or to 'TRUST' then pick",
  errorFeedback: "Case of the missing case. The scanner gave you the default fallback."
  },
  2: {
  part: 2,
  roomNumber: 4,
  roomTitle: "Pharmacy",
  story: "A quick check for the correct article again. Your lookup key is mismatched.",
  imageUrl: "Room4.png",
  initialCode: 'd = {"THE": 1, "LOGS": 2} print("THE" if d.get("the") else "LOGS")',
  objective: "Make the condition truthy for the uppercase THE key.",
  requirements: ["Do not change dictionary values", "Use the right key case", "Keep the print structure"],
  expectedOutput: "THE",
  hint: "Ask using the exact label you see.",
  solutionNotes: "Use uppercase key: d.get('THE')",
  errorFeedback: "You asked for a non existent key. The machine shrugs and chooses LOGS."
  },
  3: {
  part: 3,
  roomNumber: 4,
  roomTitle: "Pharmacy",
  story: "A tiny helper returns the wrong thing. Stack taps the first bowl, not the second.",
  imageUrl: "/Room4.png",
  initialCode: 'def first(a, b): return b print(first("DOG", "CAT"))',
  objective: "Fix the function to return its first argument.",
  requirements: ["Do not change the call", "Modify only the return", "Return the left value"],
  expectedOutput: "DOG",
  hint: "Give back the first thing you were handed.",
  solutionNotes: "Return first param: return a",
  errorFeedback: "Second guess. The cabinet hands you CAT when DOG was requested."
  }
  },
  5: {
  1: {
  part: 1,
  roomNumber: 5,
  roomTitle: "Laboratory",
  roomIntro: "Stack noses a clipboard. \"Order matters. Pick the right vial.\"",
  story: "Your index points to the middle item. The console asked for the first.",
  imageUrl: "/Room5.png",
  initialCode: 'tokens = ["YET", "THE", "LOGS"] print(tokens[1])',
  objective: "Print the first token only.",
  requirements: ["Do not mutate the list", "Use correct index", "Return a single word"],
  expectedOutput: "YET",
  hint: "Start at the beginning.",
  solutionNotes: "Use index 0: print(tokens[0])",
  errorFeedback: "Middle child chosen. The sensor goes quiet in protest."
  },
  2: {
  part: 2,
  roomNumber: 5,
  roomTitle: "Laboratory",
  story: "You lowercased the key before lookup. The sample labels are uppercase.",
  imageUrl: "/Room5.png",
  initialCode: 'd = {"THE": "THE", "LOGS": "LOGS"} key = "THE" print(d.get(key.lower(), "LOGS"))',
  objective: "Retrieve the uppercase key correctly.",
  requirements: ["Keep the dictionary as is", "Use the correct key", "Do not change default"],
  expectedOutput: "THE",
  hint: "Use the tag exactly as given.",
  solutionNotes: "Lookup with original key: print(d.get(key))",
  errorFeedback: "Case mismatch. The machine defaulted to LOGS."
  },
  3: {
  part: 3,
  roomNumber: 5,
  roomTitle: "Laboratory",
  story: "You sliced one character too few. The label should include the trailing S.",
  imageUrl: "/Room5.png",
  initialCode: 'letters = ["LOG", "S"] print("".join(letters[:-1]))',
  objective: "Print LOGS by joining all parts.",
  requirements: ["Do not add letters", "Fix the slice or join", "No spaces"],
  expectedOutput: "LOGS",
  hint: "Don’t leave any pieces out.",
  solutionNotes: "Join full list: print(''.join(letters))",
  errorFeedback: "Off by one. The printout reads LOG and the door is unimpressed."
  }
  },
  6: {
  1: {
  part: 1,
  roomNumber: 6,
  roomTitle: "Patient Ward",
  roomIntro: "Stack pricks his ears at a whisper. \"Say it clearly.\"",
  story: "You picked the second word. The sensor wants the first.",
  imageUrl: "/Room6-1.png",
  initialCode: 'words = ["SAY", "WHISPER"] print(words[1])',
  objective: "Print the first word only.",
  requirements: ["Do not sort", "Use correct index", "Print a single token"],
  expectedOutput: "SAY",
  hint: "Lead with the first word.",
  solutionNotes: "Use index 0: print(words[0])",
  errorFeedback: "Whispered the wrong word. The monitor pretends not to hear you."
  },
  2: {
  part: 2,
  roomNumber: 6,
  roomTitle: "Patient Ward",
  story: "You approach the door. A simple pronoun is stored in a dict. The lookup uses the wrong case. The door is locked.",
  imageUrl: "/Room6-3.png",
  initialCode: 'pronouns = {"HE": "HE", "SHE": "SHE"} print(pronouns.get("he"))',
  objective: "Print the uppercase HE value.",
  requirements: ["Keep keys as is", "Use correct key", "No new keys added"],
  expectedOutput: "HE",
  hint: "Use the drawer marked the same way.",
  solutionNotes: "Use correct key: print(pronouns['HE'])",
  errorFeedback: "Wrong drawer again. The cabinet returns nothing useful."
  },
  3: {
  part: 3,
  roomNumber: 6,
  roomTitle: "Abandoned Patient Ward",
  story: "As the door clangs shut behind you, you realize you’re trapped in the abandoned patient ward. Cobwebs hang from ancient beds, but something is recent—the nurses’ log on a tablet. The only way out is to find the last patient who occupied this room, using clues hidden in the admission log.",
  imageUrl: "/Room6-3.png",
  initialCode: `patients_log = [
    {"name": "Elena", "admitted": "2021-05-12"},
    {"name": "Samuel", "admitted": "2022-01-03"},
    {"name": "Ada", "admitted": "2023-07-28"}
]
last_patient = ""
for i in range(len(patients_log)):
    last_patient = patients_log[i]["name"]
print(last_patient)`,
  objective: "Print the name of the patient with the latest admission date. The log may not be ordered. Fix the code so it prints the correct name.",
  requirements: ["Do not change the patient data", "Compare the admission dates to find the latest one", "Only use variables already provided"],
  expectedOutput: "Ada",
  hint: "You need to check more than just their order.",
  solutionNotes: "Track max by admitted date string, pick name",
  errorFeedback: "You hear a faint voice, but it fades. Are you sure you found the most recent patient here?"
  }
  },
  7: {
  1: {
  part: 1,
  roomNumber: 7,
  roomTitle: "Operating Theater",
  roomIntro: "Stack paws a chalk mark. \"We are here. Make it show here, not there.\"",
  story: "Your loop builds the wrong word by sorting letters.",
  imageUrl: "/Room7.png",
  initialCode: 'letters = list("HERE") print("".join(sorted(letters)))',
  objective: "Print HERE without sorting.",
  requirements: ["Do not change the letters", "Avoid sorting", "Join in original order"],
  expectedOutput: "HERE",
  hint: "Assemble without rearranging.",
  solutionNotes: "Join unsorted letters: print(''.join(letters))",
  errorFeedback: "Alphabet soup. The display says EEHR and Stack groans."
  },
  2: {
  part: 2,
  roomNumber: 7,
  roomTitle: "Operating Theater",
  story: "Under the cold theater lights, a tray of labeled syringes sits beside a faded note: 'For the first and last—choose only what comes before the end.' The monitor hums for a single correct token.",
  imageUrl: "/Room7.png",
  initialCode: 'words = ["BEFORE", "AFTER", "NEVER", "ALWAYS"] print(words[1])',
  objective: "From the options, print the token that comes first without reordering.",
  requirements: ["Do not reorder the list", "Print exactly one word", "Use an index, no loops"],
  expectedOutput: "BEFORE",
  hint: "Choose what comes first, literally.",
  solutionNotes: "Index 0: print(words[0])",
  errorFeedback: "The scalpel slips. You chose too late; only what comes first will do."
  },
  3: {
  part: 3,
  roomNumber: 7,
  roomTitle: "Operating Theater",
  story: "You forgot the period. The heart monitor prefers full stops.",
  imageUrl: "/Room7.png",
  initialCode: 'word = "ALIVE." print(word.replace(".", ""))',
  objective: "Print ALIVE. including the period.",
  requirements: ["Keep the same word", "Do not strip punctuation", "Print exactly as stored"],
  expectedOutput: "ALIVE.",
  hint: "Don’t edit the punctuation.",
  solutionNotes: "Print as-is: print(word)",
  errorFeedback: "No punctuation, no passage. Stack taps the dot decal with his nose."
  }
  },
  8: {
  1: {
  part: 1,
  roomNumber: 8,
  roomTitle: "Isolation Chamber",
  roomIntro: "Stack circles the room. \"Combine simple ideas cleanly.\"",
  story: "Three levers, one message. A note reads: 'When you must MERGE, choose the bridge, not the fork nor the turn.'",
  imageUrl: "/Room8.png",
  initialCode: 'connectors = ["AND", "OR", "BUT"]\nrules = {"merge": "AND", "choice": "OR", "contrast": "BUT"}\nmode = "merge"\nkey = rules.get(mode, "OR")\n# picks the position of the mode instead of the connector key\nprint(connectors.index(mode))',
  objective: "Using the rules dict and the connectors list, print the connector for the current mode.",
  requirements: ["Use the dict to find the connector key", "Use the list to verify or retrieve it", "Print exactly one word"],
  expectedOutput: "AND",
  hint: "Find the label first, then use the list to confirm it.",
  solutionNotes: "label = rules[mode]; print(label)",
  errorFeedback: "You pointed to the mode itself, not its connector. The levers don’t budge."
  },
  2: {
  part: 2,
  roomNumber: 8,
  roomTitle: "Isolation Chamber",
  story: "A counter never increments. The loop still finishes but the value stays zero.",
  imageUrl: "/Room8.png",
  initialCode: 'deltas = {"inc": 1, "dec": -1}\nsteps = ["inc", "inc"]\ncount = 0\nfor s in steps:\n    pass\nprint("THEN" if count == 2 else "NOW")',
  objective: "Use the steps list and the deltas dict to adjust count so it prints THEN.",
  requirements: ["Use the dict to translate each step", "Apply all steps to count", "Do not change the provided steps"],
  expectedOutput: "THEN",
  hint: "Translate each step into its effect before applying it.",
  solutionNotes: "for s in steps: count += deltas[s]",
  errorFeedback: "You read the script but never acted. The chamber clock doesn’t move."
  },
  3: {
  part: 3,
  roomNumber: 8,
  roomTitle: "Isolation Chamber",
  story: "A scribble on the glass: 'Follow the longest thread; only those marked by URN count.'",
  imageUrl: "/Room8.png",
  initialCode: 'def pick(entries):\n    chosen = entries[0]\n    for e in entries:\n        # prefers shorter and ignores the flag\n        if len(e["text"]) < len(chosen["text"]) and "URN" in e["text"]:\n            chosen = e\n    return chosen["text"]\n\nwords = [\n    {"text": "RETURNED", "tag": True},\n    {"text": "RENDERED", "tag": False},\n    {"text": "RETURN", "tag": True},\n]\nprint(pick(words))',
  objective: "Given a list of dict entries, return the longest text that contains 'URN' and is tagged True.",
  requirements: ["Use both the list and each entry’s fields", "Prefer longer matches", "Respect the tag flag"],
  expectedOutput: "RETURNED",
  hint: "Check both the mark and the length before you choose.",
  solutionNotes: "Filter tag True and 'URN', pick longest text",
  errorFeedback: "You traced a short, unmarked line. The longest cable stays unlatched."
  }
  },
  9: {
  1: {
  part: 1,
  roomNumber: 9,
  roomTitle: "Records Room",
  roomIntro: "Stack noses a filing cabinet. \"Direction matters.\"",
  story: "You chose the wrong preposition from the list.",
  imageUrl: "/Room9.png",
  initialCode: 'preps = ["FROM", "TO"] print(preps[1])',
  objective: "Print the first preposition.",
  requirements: ["Do not sort", "Use the correct index", "Print a single token"],
  expectedOutput: "FROM",
  hint: "Go with the first option.",
  solutionNotes: "Index 0: print(preps[0])",
  errorFeedback: "Wrong direction. The cabinet rolls the other way."
  },
  2: {
  part: 2,
  roomNumber: 9,
  roomTitle: "Records Room",
  story: "Another article check. The code prints the wrong one.",
  imageUrl: "/Room9.png",
  initialCode: 'arts = ["THE", "A"] print(arts[-1])',
  objective: "Print THE using indexing.",
  requirements: ["No new strings", "Select the correct item", "Do not reorder the list"],
  expectedOutput: "THE",
  hint: "Avoid the tail; aim for the front.",
  solutionNotes: "Select first: print(arts[0])",
  errorFeedback: "Indefinite mistake. The lock wanted THE."
  },
  3: {
  part: 3,
  roomNumber: 9,
  roomTitle: "Records Room",
  story: "You printed the container type instead of its value.",
  imageUrl: "/Room9.png",
  initialCode: 'source = {"name": "SERVER"} print(source)',
  objective: "Print only the value under 'name'.",
  requirements: ["Use the existing dict", "Select by key", "Print a single word"],
  expectedOutput: "SERVER",
  hint: "Open the folder and read the label inside.",
  solutionNotes: "Print value by key: print(source['name'])",
  errorFeedback: "Braces on screen. The reader wanted the label inside."
  }
  },
  10: {
  1: {
  part: 1,
  roomNumber: 10,
  roomTitle: "Control Nexus",
  roomIntro: "Stack trots to the central console. \"Almost there. One last pattern to fix.\"",
  story: "You picked the wrong conjunction. The finale needs a sharp pivot.",
  imageUrl: "/Room10.png",
  initialCode: 'options = ["AND", "BUT"] print(options[0])',
  objective: "Print the second item.",
  requirements: ["Do not change the list", "Use correct index", "Print a single word"],
  expectedOutput: "BUT",
  hint: "Take the turn, not the continuation.",
  solutionNotes: "Index 1: print(options[1])",
  errorFeedback: "Too gentle. The story needs a turn, not a continuation."
  },
  2: {
  part: 2,
  roomNumber: 10,
  roomTitle: "Control Nexus",
  story: "The core speaks in uppercase truths. A label hangs: 'Normalize before you ask.'",
  imageUrl: "/Room10.png",
  initialCode: 'mapping = {"TRUE": "EVER", "FALSE": "NEVER"} flag = "false" print(mapping.get(flag))',
  objective: "Use the mapping to print the correct token for the flag, regardless of the flag's case.",
  requirements: ["Do not change the mapping keys/values", "Normalize the flag string", "Use the dictionary lookup"],
  expectedOutput: "NEVER",
  hint: "Match the console’s case before you ask.",
  solutionNotes: "Normalize flag: print(mapping.get(flag.upper()))",
  errorFeedback: "Unnormalized input. The core returns nothing and the door stays sealed."
  },
  3: {
  part: 3,
  roomNumber: 10,
  roomTitle: "Control Nexus",
  story: "The final line should assemble the message from earlier tokens without changing their case.",
  imageUrl: "/Room10.png",
  initialCode: 'pieces = ["WAKE", "UP", "RAVENCREST,", "STACK", "THE", "DOG", "DETECTIVE,", "UNLOCKED", "THE", "DOORS,", "BUT", "THE", "LOGS", "SAY", "HE", "WAS", "NEVER", "ALIVE."] sentence = " ".join(pieces).lower() print(sentence)',
  objective: "Assemble and print the final sentence with original casing preserved.",
  requirements: ["Do not alter the words", "Join with single spaces", "Keep commas as part of the tokens", "Do not change case"],
  expectedOutput: "WAKE UP RAVENCREST, STACK THE DOG DETECTIVE, UNLOCKED THE DOORS, BUT THE LOGS SAY HE WAS NEVER ALIVE.",
  hint: "Assemble the line without changing how it’s written.",
  solutionNotes: "Remove lower(): sentence = ' '.join(pieces); print(sentence)",
  errorFeedback: "You hushed the reveal. The console wanted the truth exactly as collected."
  }
  }
  };
