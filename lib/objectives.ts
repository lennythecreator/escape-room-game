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
  hint: "Use words[0].",
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
  hint: "Lists are zero indexed.",
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
  hint: "words[-1] or words[2] both work here.",
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
  hint: "Try using a string method.",
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
  hint: "The key for the definite article is 'the'.",
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
  hint: "Use animals[0].",
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
  hint: "Try title.upper().",
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
  hint: "Reverse the messages or check not locked.",
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
  hint: "Use ''.join(parts).",
  errorFeedback: "Backward assembly. Stack taps the second tile then the first."
  }
  },
  4: {
  1: {
  part: 1,
  roomNumber: 4,
  roomTitle: "Pharmacy",
  roomIntro: "Stack paws at a pill counter. \"Dose matters. Detail matters. Case matters.\"",
  story: "You are filtering for a token but the equality check misses due to case.",
  imageUrl: "/Room4.png",
  initialCode: 'words = ["TRUST", "THE", "DOG"] picked = [] for w in words: if w == "trust": picked.append(w) print(picked[0] if picked else "THE")',
  objective: "Select and print TRU ST only when it matches by case.",
  requirements: ["Keep the words list", "Fix the comparison", "Print the matching token"],
  expectedOutput: "TRUST",
  hint: "Compare to 'TRUST' or normalize both sides.",
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
  hint: "Use d.get('THE').",
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
  hint: "Return a.",
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
  hint: "Index 0 is the first element.",
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
  hint: "Use d.get(key).",
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
  hint: "Join the full list.",
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
  imageUrl: "/images/patient-ward.jpg",
  initialCode: 'words = ["SAY", "WHISPER"] print(words[1])',
  objective: "Print the first word only.",
  requirements: ["Do not sort", "Use correct index", "Print a single token"],
  expectedOutput: "SAY",
  hint: "words[0].",
  errorFeedback: "Whispered the wrong word. The monitor pretends not to hear you."
  },
  2: {
  part: 2,
  roomNumber: 6,
  roomTitle: "Patient Ward",
  story: "A simple pronoun is stored in a dict. The lookup uses the wrong case.",
  imageUrl: "/images/patient-ward.jpg",
  initialCode: 'pronouns = {"HE": "HE", "SHE": "SHE"} print(pronouns.get("he"))',
  objective: "Print the uppercase HE value.",
  requirements: ["Keep keys as is", "Use correct key", "No new keys added"],
  expectedOutput: "HE",
  hint: "Use pronouns['HE'] or .get('HE').",
  errorFeedback: "Wrong drawer again. The cabinet returns nothing useful."
  },
  3: {
  part: 3,
  roomNumber: 6,
  roomTitle: "Patient Ward",
  story: "Your branch says the patient is absent. The bed log says otherwise.",
  imageUrl: "/images/patient-ward.jpg",
  initialCode: 'present = True print("WERE" if not present else "WAS")',
  objective: "Print WAS when present is True.",
  requirements: ["Do not change the variable", "Keep the two choices", "Fix the condition"],
  expectedOutput: "WAS",
  hint: "Remove the not.",
  errorFeedback: "Pluralized the singular. The bed sensor emits a flat beep."
  }
  },
  7: {
  1: {
  part: 1,
  roomNumber: 7,
  roomTitle: "Operating Theater",
  roomIntro: "Stack paws a chalk mark. \"We are here. Make it show here, not there.\"",
  story: "Your loop builds the wrong word by sorting letters.",
  imageUrl: "/images/operating-theater.jpg",
  initialCode: 'letters = list("HERE") print("".join(sorted(letters)))',
  objective: "Print HERE without sorting.",
  requirements: ["Do not change the letters", "Avoid sorting", "Join in original order"],
  expectedOutput: "HERE",
  hint: "Join the list as is.",
  errorFeedback: "Alphabet soup. The display says EEHR and Stack groans."
  },
  2: {
  part: 2,
  roomNumber: 7,
  roomTitle: "Operating Theater",
  story: "An index skips past the right token. Off by one again.",
  imageUrl: "/images/operating-theater.jpg",
  initialCode: 'words = ["BEFORE", "AFTER"] print(words[1])',
  objective: "Print the first item only.",
  requirements: ["No reordering", "Use correct index", "One token"],
  expectedOutput: "BEFORE",
  hint: "words[0].",
  errorFeedback: "Too late. AFTER is not the hint this room needs."
  },
  3: {
  part: 3,
  roomNumber: 7,
  roomTitle: "Operating Theater",
  story: "You forgot the period. The heart monitor prefers full stops.",
  imageUrl: "/images/operating-theater.jpg",
  initialCode: 'word = "ALIVE." print(word.replace(".", ""))',
  objective: "Print ALIVE. including the period.",
  requirements: ["Keep the same word", "Do not strip punctuation", "Print exactly as stored"],
  expectedOutput: "ALIVE.",
  hint: "Print word directly.",
  errorFeedback: "No punctuation, no passage. Stack taps the dot decal with his nose."
  }
  },
  8: {
  1: {
  part: 1,
  roomNumber: 8,
  roomTitle: "Isolation Chamber",
  roomIntro: "Stack circles the room. \"Combine simple ideas cleanly.\"",
  story: "The joiner uses the wrong separator. The panel expects a single connective.",
  imageUrl: "/images/isolation-chamber.jpg",
  initialCode: 'parts = ["AND"] print("-".join(parts))',
  objective: "Print AND without extra characters.",
  requirements: ["Do not add parts", "Use the correct separator", "One token output"],
  expectedOutput: "AND",
  hint: "Join with an empty string or print the token.",
  errorFeedback: "You added dashes. The chamber does not like decorations."
  },
  2: {
  part: 2,
  roomNumber: 8,
  roomTitle: "Isolation Chamber",
  story: "A counter never increments. The loop still finishes but the value stays zero.",
  imageUrl: "/images/isolation-chamber.jpg",
  initialCode: 'count = 0 for _ in range(2): pass print("THEN" if count == 2 else "NOW")',
  objective: "Increment count so the condition prints THEN.",
  requirements: ["Modify the loop body", "Use += 1", "Do not change the range"],
  expectedOutput: "THEN",
  hint: "Put count += 1 inside the loop.",
  errorFeedback: "Stuck at zero. Time refuses to advance."
  },
  3: {
  part: 3,
  roomNumber: 8,
  roomTitle: "Isolation Chamber",
  story: "Your function returns its input unchanged. The chamber wants a stronger word.",
  imageUrl: "/images/isolation-chamber.jpg",
  initialCode: 'def amplify(word): return word print(amplify("RETURNED"))',
  objective: "Return the input unchanged is fine, but the bug should still make the print show RETURNED.",
  requirements: ["Do not change the call", "Ensure the function returns the argument", "Keep it simple"],
  expectedOutput: "RETURNED",
  hint: "Return the parameter as is.",
  errorFeedback: "You tried to modify what was already correct. The room snorts at overengineering."
  }
  },
  9: {
  1: {
  part: 1,
  roomNumber: 9,
  roomTitle: "Records Room",
  roomIntro: "Stack noses a filing cabinet. \"Direction matters.\"",
  story: "You chose the wrong preposition from the list.",
  imageUrl: "/images/records-room.jpg",
  initialCode: 'preps = ["FROM", "TO"] print(preps[1])',
  objective: "Print the first preposition.",
  requirements: ["Do not sort", "Use the correct index", "Print a single token"],
  expectedOutput: "FROM",
  hint: "Index zero.",
  errorFeedback: "Wrong direction. The cabinet rolls the other way."
  },
  2: {
  part: 2,
  roomNumber: 9,
  roomTitle: "Records Room",
  story: "Another article check. The code prints the wrong one.",
  imageUrl: "/images/records-room.jpg",
  initialCode: 'arts = ["THE", "A"] print(arts[-1])',
  objective: "Print THE using indexing.",
  requirements: ["No new strings", "Select the correct item", "Do not reorder the list"],
  expectedOutput: "THE",
  hint: "Negative one picks the last item. You want the first.",
  errorFeedback: "Indefinite mistake. The lock wanted THE."
  },
  3: {
  part: 3,
  roomNumber: 9,
  roomTitle: "Records Room",
  story: "You printed the container type instead of its value.",
  imageUrl: "/images/server-room.jpg",
  initialCode: 'source = {"name": "SERVER"} print(source)',
  objective: "Print only the value under 'name'.",
  requirements: ["Use the existing dict", "Select by key", "Print a single word"],
  expectedOutput: "SERVER",
  hint: "Use source['name'].",
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
  imageUrl: "/images/server-room.jpg",
  initialCode: 'options = ["AND", "BUT"] print(options[0])',
  objective: "Print the second item.",
  requirements: ["Do not change the list", "Use correct index", "Print a single word"],
  expectedOutput: "BUT",
  hint: "Index one.",
  errorFeedback: "Too gentle. The story needs a turn, not a continuation."
  },
  2: {
  part: 2,
  roomNumber: 10,
  roomTitle: "Control Nexus",
  story: "A negation is flipped. The truth should cut deeper.",
  imageUrl: "/images/server-room.jpg",
  initialCode: 'flag = False print("EVER" if flag else "NEVER")',
  objective: "Print NEVER.",
  requirements: ["Do not change flag", "Keep the two options", "Select the correct branch"],
  expectedOutput: "NEVER",
  hint: "flag is False. The else branch should already print NEVER.",
  errorFeedback: "You nearly inverted the twist. Keep the negation straight."
  },
  3: {
  part: 3,
  roomNumber: 10,
  roomTitle: "Control Nexus",
  story: "The final line should assemble the message from earlier tokens without changing their case.",
  imageUrl: "/images/server-room.jpg",
  initialCode: 'pieces = ["WAKE", "UP", "RAVENCREST,", "STACK", "THE", "DOG", "DETECTIVE,", "UNLOCKED", "THE", "DOORS,", "BUT", "THE", "LOGS", "SAY", "HE", "WAS", "NEVER", "ALIVE."] sentence = " ".join(pieces).lower() print(sentence)',
  objective: "Assemble and print the final sentence with original casing preserved.",
  requirements: ["Do not alter the words", "Join with single spaces", "Keep commas as part of the tokens", "Do not change case"],
  expectedOutput: "WAKE UP RAVENCREST, STACK THE DOG DETECTIVE, UNLOCKED THE DOORS, BUT THE LOGS SAY HE WAS NEVER ALIVE.",
  hint: "Remove the lowercasing and keep the join.",
  errorFeedback: "You hushed the reveal. The console wanted the truth exactly as collected."
  }
  }
  };
