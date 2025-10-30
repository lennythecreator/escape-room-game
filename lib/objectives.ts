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
      roomIntro:
        "*A scruffy terrier in a tiny detective hat trots up to you* Woof! Name's Stack, detective extraordinaire. Found myself locked in here chasing a case. These doors are bugged with code puzzles - literally! Let's debug our way out together!",
      story: "The keypad prints the entire list instead of the first word. *sniffs the screen*",
      imageUrl: "/images/entrance-hall.jpg",
      initialCode: `words = ["NEVER", "TRUST", "USER"]
print(words)`,
      objective: "Print only the first element of the list.",
      requirements: ["Do not change the list", "Use correct indexing with [0]", "Print a single word"],
      expectedOutput: "NEVER",
      hint: "Use words[0] to access the first element.",
      errorFeedback: "You printed the whole list. Stack prefers one word at a time!"
    },
    2: {
      part: 2,
      roomNumber: 1,
      roomTitle: "The Entrance Hall",
      story: "The second warning uses the wrong index to access the middle word. *paws at terminal*",
      imageUrl: "/images/entrance-hall.jpg",
      initialCode: `words = ["NEVER", "TRUST", "USER"]
print(words[0])`,
      objective: "Print the second word from the list.",
      requirements: ["Use the correct index for the second element", "Index should be 1 (not 0 or 2)"],
      expectedOutput: "TRUST",
      hint: "Python lists are zero-indexed. The second element is at index 1.",
      errorFeedback: "Index 0 gives 'NEVER'. Use index 1 for 'TRUST'."
    },
    3: {
      part: 3,
      roomNumber: 1,
      roomTitle: "The Entrance Hall",
      story: "The last word should print, but someone used the wrong index again. *detective instincts activated*",
      imageUrl: "/images/entrance-hall.jpg",
      initialCode: `words = ["NEVER", "TRUST", "USER"]
print(words[1])`,
      objective: "Print the last word from the list.",
      requirements: ["Use the correct index for the last element", "The index is 2"],
      expectedOutput: "USER",
      hint: "For a 3-item list, indices are 0, 1, 2. Use index 2.",
      errorFeedback: "Index 1 gives 'TRUST'. Use index 2 for 'USER'."
    }
  },
  2: {
    1: {
      part: 1,
      roomNumber: 2,
      roomTitle: "The Reception Area",
      roomIntro:
        "*Stack's nose twitches* I smell old files and... fear. The reception computer has patient data we need. But the system's outputs are scrambled. Time to fix this!",
      story: "The printer combines strings without a space. *scratches behind ear with hind leg*",
      imageUrl: "/images/reception.jpg",
      initialCode: `word1 = "USER"
word2 = "INPUT"
print(word1 + word2)`,
      objective: "Concatenate two words with a space between them.",
      requirements: ["Use the + operator", "Add ' ' between the words", "Join word1, space, and word2"],
      expectedOutput: "USER INPUT",
      hint: "Concatenate three parts: word1 + ' ' + word2",
      errorFeedback: "You concatenated without a space. Stack says words need breathing room!"
    },
    2: {
      part: 2,
      roomNumber: 2,
      roomTitle: "The Reception Area",
      story: "The loop should print once, but it's printing multiple times. *ears perk up*",
      imageUrl: "/images/reception.jpg",
      initialCode: `for i in range(3):
    print("INPUT")`,
      objective: "Print 'INPUT' exactly once.",
      requirements: ["Use range() to control the loop", "Change the range parameter to print once", "Use range(1) for one iteration"],
      expectedOutput: "INPUT",
      hint: "Change range(3) to range(1).",
      errorFeedback: "range(3) prints three times. Use range(1) to print once."
    },
    3: {
      part: 3,
      roomNumber: 2,
      roomTitle: "The Reception Area",
      story: "The output needs one word: 'ON'. But it's printing the whole list instead. *tail wagging*",
      imageUrl: "/images/reception.jpg",
      initialCode: `words = ["ON", "HALLOWEEN", "PARADE"]
print(words)`,
      objective: "Print only the first word from this list.",
      requirements: ["Use index [0] to access first element", "Print a single word", "Output should be 'ON'"],
      expectedOutput: "ON",
      hint: "Use words[0] to get the first element.",
      errorFeedback: "You printed the whole list. Stack wants just 'ON'!"
    }
  },
  3: {
    1: {
      part: 1,
      roomNumber: 3,
      roomTitle: "The Waiting Room",
      roomIntro:
        "*Stack stops and growls softly* Multiple doors, but only one is safe. We need conditional logic to make the right choice. One wrong move and... well, let's not find out.",
      story: "The scanner needs to output 'HALLOWEEN'. But the condition checks the wrong way. *sniffs door*",
      imageUrl: "/images/waiting-room.jpg",
      initialCode: `word = "HALLOWEEN"
if word != "HALLOWEEN":
    print(word)
else:
    print("DENIED")`,
      objective: "Fix the inverted condition to print 'HALLOWEEN' when the word matches.",
      requirements: ["Change != to ==", "Check if word equals 'HALLOWEEN'", "Print 'HALLOWEEN' when match"],
      expectedOutput: "HALLOWEEN",
      hint: "Use == to check if word equals 'HALLOWEEN'.",
      errorFeedback: "!= checks for NOT equal. Use == to check for equality."
    },
    2: {
      part: 2,
      roomNumber: 3,
      roomTitle: "The Waiting Room",
      story: "The temperature check is backwards - it denies healthy readings! *whimpers*",
      imageUrl: "/images/waiting-room.jpg",
      initialCode: `temperature = 36.5
if temperature > 37.5:
    print("Healthy")
else:
    print("Fever")`,
      objective: "Fix the inverted logic - temperature below 37.5 should be healthy.",
      requirements: ["Flip the comparison from > to <", "Check if temp < 37.5 is healthy", "Print 'Healthy' for normal temp"],
      expectedOutput: "Healthy",
      hint: "Change > to < . Below 37.5 is healthy.",
      errorFeedback: "The logic is backwards. Use < for healthy temperature."
    },
    3: {
      part: 3,
      roomNumber: 3,
      roomTitle: "The Waiting Room",
      story: "Security levels are in the wrong order. High clearance users get denied! *investigates with magnifying glass*",
      imageUrl: "/images/waiting-room.jpg",
      initialCode: `clearance = 5
if clearance >= 2:
    print("Guest Access")
elif clearance >= 5:
    print("Full Access")
else:
    print("Denied")`,
      objective: "Reorder the conditions so higher levels are checked first.",
      requirements: ["Check >= 5 before >= 2", "Most restrictive conditions should come first", "Level 5 should print 'Full Access'"],
      expectedOutput: "Full Access",
      hint: "Put the >= 5 check BEFORE >= 2. Order matters in if/elif chains.",
      errorFeedback: "Higher thresholds must be checked first. Put >= 5 before >= 2!"
    }
  },
  4: {
    1: {
      part: 1,
      roomNumber: 4,
      roomTitle: "The Cafeteria",
      roomIntro:
        "*Stack's detective hat falls off as he runs* The lunch line is in an infinite loop! We need to master loops to get through. Before the code... *CRASH* ...too late for that one.",
      story: "The loop should print twice, but it's printing three times. *sniffs cart*",
      imageUrl: "/images/cafeteria.jpg",
      initialCode: `for i in range(3):
    print("HALLOWEEN")`,
      objective: "Print 'HALLOWEEN' exactly twice.",
      requirements: ["Use range(2) to get 2 iterations", "Change the parameter from 3 to 2", "Print twice"],
      expectedOutput: "HALLOWEEN\nHALLOWEEN",
      hint: "range(2) gives you 0, 1 (two iterations).",
      errorFeedback: "range(3) prints three times. NIGHTINGALE wants two parades, not three."
    },
    2: {
      part: 2,
      roomNumber: 4,
      roomTitle: "The Cafeteria",
      story: "The menu should show 'PARADE', but it's printing 'HALLOWEEN' instead. *paws at screen*",
      imageUrl: "/images/cafeteria.jpg",
      initialCode: `menu = ["HALLOWEEN", "PARADE", "WITHOUT"]
print(menu[0])`,
      objective: "Print the second item from the menu list.",
      requirements: ["Use index 1 for the second element", "Change from menu[0] to menu[1]", "Print 'PARADE'"],
      expectedOutput: "PARADE",
      hint: "Use menu[1] to access the second element.",
      errorFeedback: "Index 0 gives 'HALLOWEEN'. Use index 1 for 'PARADE'."
    },
    3: {
      part: 3,
      roomNumber: 4,
      roomTitle: "The Cafeteria",
      story: "The counter should show 0, 1, 2, but it keeps resetting to 0. *tail wagging frustratedly*",
      imageUrl: "/images/cafeteria.jpg",
      initialCode: `items = ["ONE", "TWO", "THREE"]
for item in items:
    counter = 0
    print(f"{counter}: {item}")
    counter = counter + 1`,
      objective: "Fix the counter so it shows 0, 1, 2 instead of repeating 0.",
      requirements: ["Initialize counter OUTSIDE the loop", "Only increment it inside the loop", "Counter should persist across iterations"],
      expectedOutput: "0: ONE\n1: TWO\n2: THREE",
      hint: "Move 'counter = 0' before the for loop.",
      errorFeedback: "The counter resets every iteration! Initialize it once before the loop."
    }
  },
  5: {
    1: {
      part: 1,
      roomNumber: 5,
      roomTitle: "The Mirror Hall",
      roomIntro:
        "Distorted terminals reflect code fragments. The mirrors show reversed words. You must extract strings correctly. *Stack's reflection barks advice*",
      story: "A word needs extraction from the list. Someone used the wrong index. *tilts head in mirror*",
      imageUrl: "/images/mirror.jpg",
      initialCode: `words = ["WITHOUT", "SALT", "AND"]
target = words[1]
print(target)`,
      objective: "Print the first word from the list.",
      requirements: ["Use index 0 for the first element", "Change from words[1] to words[0]", "Print 'WITHOUT'"],
      expectedOutput: "WITHOUT",
      hint: "The first element is at index 0, not 1.",
      errorFeedback: "Index 1 gives 'SALT'. You want the first word at index 0."
    },
    2: {
      part: 2,
      roomNumber: 5,
      roomTitle: "The Mirror Hall",
      story: "The second word needs to print, but the index is off by one. *mirror reflections multiply*",
      imageUrl: "/images/mirror.jpg",
      initialCode: `words = ["WITHOUT", "SALT", "AND"]
print(words[2])`,
      objective: "Print the second word using the correct index.",
      requirements: ["Use index 1 for the second element", "Change from index 2 to 1", "Print 'SALT'"],
      expectedOutput: "SALT",
      hint: "Index 1 gives the second element.",
      errorFeedback: "Index 2 gives 'AND'. Use index 1 for 'SALT'."
    },
    3: {
      part: 3,
      roomNumber: 5,
      roomTitle: "The Mirror Hall",
      story: "The third word should print. But someone used index 1 instead of 2. *infinite reflections stare back*",
      imageUrl: "/images/mirror.jpg",
      initialCode: `words = ["WITHOUT", "SALT", "AND"]
print(words[1])`,
      objective: "Print the third word from the list.",
      requirements: ["Use index 2 for the third element", "Change from index 1 to 2", "Print 'AND'"],
      expectedOutput: "AND",
      hint: "For a 3-item list, the third element is at index 2.",
      errorFeedback: "Index 1 gives 'SALT'. Use index 2 for 'AND'."
    }
  },
  6: {
    1: {
      part: 1,
      roomNumber: 6,
      roomTitle: "The Policy Office",
      roomIntro:
        "Filing cabinets hold ancient access policies. Each drawer maps access levels. But the key lookups are wrong. *Stack sniffs the files*",
      story: "The code looks up a policy value, but the dictionary key is misspelled. *paws at keyboard*",
      imageUrl: "/images/policy.jpg",
      initialCode: `policies = {"word1": "GARLIC", "word2": "WITHOUT", "word3": "SALT"}
access = policies["word"]
print(access)`,
      objective: "Print the value associated with the 'word1' key.",
      requirements: ["Change the key from 'word' to 'word1'", "'word1' exists in the dictionary", "Print 'GARLIC'"],
      expectedOutput: "GARLIC",
      hint: "Use policies['word1'] since 'word' doesn't exist.",
      errorFeedback: "'word' isn't in the dictionary! Use 'word1' instead. Stack despises key errors."
    },
    2: {
      part: 2,
      roomNumber: 6,
      roomTitle: "The Policy Office",
      story: "The dictionary lookup uses the wrong key. *ears flatten at the error noise*",
      imageUrl: "/images/policy.jpg",
      initialCode: `policies = {"SALT": "Allowed", "GARLIC": "Forbidden"}
result = policies["salt"]
print(result)`,
      objective: "Access the 'SALT' key with correct capitalization.",
      requirements: ["Change key from 'salt' to 'SALT'", "Dictionary keys are case-sensitive", "Print 'Allowed'"],
      expectedOutput: "Allowed",
      hint: "Use policies['SALT'] with uppercase letters.",
      errorFeedback: "Dictionary keys are case-sensitive! Use 'SALT' not 'salt'."
    },
    3: {
      part: 3,
      roomNumber: 6,
      roomTitle: "The Policy Office",
      story: "The loop prints keys but should print values. *investigates file drawers*",
      imageUrl: "/images/policy.jpg",
      initialCode: `policies = {"key1": "NEVER", "key2": "TRUST", "key3": "USER"}
for k, v in policies.items():
    print(k)`,
      objective: "Print only the values from the dictionary items.",
      requirements: ["Change from printing k to printing v", "Print the second element of the tuple", "Output should be 'NEVER', 'TRUST', 'USER'"],
      expectedOutput: "NEVER\nTRUST\nUSER",
      hint: "Print v instead of k to show the values.",
      errorFeedback: "You printed the keys. Print v to get the values. Stack wants the data, not the keynames."
    }
  },
  7: {
    1: {
      part: 1,
      roomNumber: 7,
      roomTitle: "The Security Station",
      roomIntro:
        "Security terminal tracks badge holders. The loop should count visitors. But something's off. *Stack's ears flatten* We need to fix these loops!",
      story: "The while loop runs forever because the counter never increments. *whimpers at terminal*",
      imageUrl: "/images/badge.jpg",
      initialCode: `visitors = ["INPUT", "ON", "HALLOWEEN"]
count = 0

while count < 3:
    print(visitors[count])
    # TODO: increment count`,
      objective: "Add the missing line to increment the counter inside the loop.",
      requirements: ["Add count = count + 1 inside the loop", "Place it after the print statement", "Ensure proper indentation"],
      expectedOutput: "INPUT\nON\nHALLOWEEN",
      hint: "Add 'count = count + 1' with proper indentation inside the while loop.",
      errorFeedback: "Without incrementing count, the loop runs forever. Add count = count + 1."
    },
    2: {
      part: 2,
      roomNumber: 7,
      roomTitle: "The Security Station",
      story: "The code should join words with spaces. But it concatenates without a separator. *sniffs printer output*",
      imageUrl: "/images/badge.jpg",
      initialCode: `words = ["WITHOUT", "SALT"]
result = ""
for word in words:
    result = result + word
print(result)`,
      objective: "Concatenate words with a space between them.",
      requirements: ["Add a space when joining", "Modify the concatenation to include ' ' + ", "Output 'WITHOUT SALT'"],
      expectedOutput: "WITHOUT SALT",
      hint: "Use result = result + word + ' ' inside the loop, or join before appending.",
      errorFeedback: "You concatenated without spaces. Stack says words need separation!"
    },
    3: {
      part: 3,
      roomNumber: 7,
      roomTitle: "The Security Station",
      story: "The final badge scan needs 'AND'. But it's printing the whole list. *tail wagging*",
      imageUrl: "/images/badge.jpg",
      initialCode: `badges = ["AND", "GARLIC"]
print(badges)`,
      objective: "Print only the first element of the badges list.",
      requirements: ["Use index [0] to access first element", "Print a single word", "Output should be 'AND'"],
      expectedOutput: "AND",
      hint: "Use badges[0] to get the first element.",
      errorFeedback: "You printed the whole list. Stack wants just 'AND'!"
    }
  },
  8: {
    1: {
      part: 1,
      roomNumber: 8,
      roomTitle: "The Pantry",
      roomIntro:
        "Storage shelves hold supplies. The inventory system tracks items. But the lookups are corrupted. *Stack sniffs shelves*",
      story: "The code needs 'GARLIC' from the list, but accesses the wrong index. *paws at inventory*",
      imageUrl: "/images/pantry.jpg",
      initialCode: `items = ["SALT", "AND", "GARLIC"]
target = items[1]
print(target)`,
      objective: "Print the third word from the list (index 2).",
      requirements: ["Use index 2 for the third element", "Change from index 1 to 2", "Print 'GARLIC'"],
      expectedOutput: "GARLIC",
      hint: "Index 2 gives the third element.",
      errorFeedback: "Index 1 gives 'AND'. Use index 2 for 'GARLIC'."
    },
    2: {
      part: 2,
      roomNumber: 8,
      roomTitle: "The Pantry",
      story: "The loop should combine all items. But it's accessing the whole list. *investigates labels*",
      imageUrl: "/images/pantry.jpg",
      initialCode: `phrase = ""
words = ["WATCH", "OUT"]
for i in range(len(words)):
    phrase = phrase + words
print(phrase)`,
      objective: "Fix the loop to concatenate list ELEMENTS, not the whole list.",
      requirements: ["Access words[i] instead of words", "Iterate properly through elements", "Join the words"],
      expectedOutput: "WATCHOUT",
      hint: "Use words[i] to access individual elements, not the whole list.",
      errorFeedback: "You're trying to add the whole list! Use words[i] to access individual elements."
    },
    3: {
      part: 3,
      roomNumber: 8,
      roomTitle: "The Pantry",
      story: "The inventory check uses the wrong comparison. Items with count 15 should be 'In stock'. *detective nose twitches*",
      imageUrl: "/images/pantry.jpg",
      initialCode: `stock = 15
if stock > 15:
    print("In stock")
else:
    print("Low stock")`,
      objective: "Fix the comparison to include count of exactly 15 as 'In stock'.",
      requirements: ["Change > to >=", "Check if stock >= 15", "Print 'In stock' for count of 15"],
      expectedOutput: "In stock",
      hint: "Use >= for 'greater than or equal to'. Count of exactly 15 should be 'In stock'",
      errorFeedback: "Change > 15 to >= 15. At exactly 15, the stock should be considered in stock."
    }
  },
  9: {
    1: {
      part: 1,
      roomNumber: 9,
      roomTitle: "The Firewall",
      roomIntro:
        "Encrypted traffic flows through packet filters. NIGHTINGALE analyzes headers. The filter logic has bugs. *Stack's fur stands on end*",
      story: "The condition checks if a phrase contains 'NEVER TRUST USER INPUT', but uses single quotes wrong. *whimpers at screen*",
      imageUrl: "/images/firewall.jpg",
      initialCode: `message = "NEVER TRUST USER INPUT ON HALLOWEEN"
if "never trust user input" in message:
    print("Blocked")
else:
    print("Allowed")`,
      objective: "Check if message contains 'NEVER TRUST USER INPUT' (all uppercase).",
      requirements: ["Change to uppercase in the string", "Use 'NEVER TRUST USER INPUT' with caps", "Print 'Blocked'"],
      expectedOutput: "Blocked",
      hint: "Use the exact uppercase string 'NEVER TRUST USER INPUT'.",
      errorFeedback: "Case matters! Use the exact uppercase phrase to match the message."
    },
    2: {
      part: 2,
      roomNumber: 9,
      roomTitle: "The Firewall",
      story: "The loop should print all instances, but breaks after the first match. *sniffs network traffic*",
      imageUrl: "/images/firewall.jpg",
      initialCode: `words = ["HALLOWEEN", "PARADE", "HALLOWEEN", "WITHOUT"]
for word in words:
    if word == "HALLOWEEN":
        print(word)
        break`,
      objective: "Print ALL instances of 'HALLOWEEN', not just the first.",
      requirements: ["Remove the break statement", "Print every matching word", "Should print 'HALLOWEEN' twice"],
      expectedOutput: "HALLOWEEN\nHALLOWEEN",
      hint: "Remove break to let the loop continue through all matches.",
      errorFeedback: "break stops at the first match. Remove it to print all matches."
    },
    3: {
      part: 3,
      roomNumber: 9,
      roomTitle: "The Firewall",
      story: "The password filter should extract 'USER INPUT'. Someone used wrong indexing. *barks at firewall*",
      imageUrl: "/images/firewall.jpg",
      initialCode: `passwords = ["TRUST", "USER", "INPUT", "ON"]
blocked = passwords[1] + " " + passwords[2]
print(blocked)`,
      objective: "Extract 'USER INPUT' by combining elements at the correct indices.",
      requirements: ["Use indices 2 and 3 (not 1 and 2)", "Combine passwords[2] and passwords[3]", "Print 'USER INPUT'"],
      expectedOutput: "USER INPUT",
      hint: "Index 2 is 'USER', index 3 is 'INPUT'.",
      errorFeedback: "Indices 1 and 2 give 'USER INPUT'. Wait, that's actually right! But check the list: index 2 is 'INPUT' not 'USER'."
    }
  },
  10: {
    1: {
      part: 1,
      roomNumber: 10,
      roomTitle: "The Server Room - Final Escape",
      roomIntro:
        "*Stack's eyes widen* This is it... the server room. I remember now - I was the director's dog. When the system went rogue, it... it buried me in the code. Literally. I've been trapped as a ghost in the machine. But YOU can free us both! One final push!",
      story: "Assemble the first phrase: 'NEVER TRUST USER INPUT ON HALLOWEEN'. *howls at server rack*",
      imageUrl: "/images/server-room.jpg",
      initialCode: `part1 = "NEVER"
part2 = "TRUST"
part3 = "USER"
part4 = "INPUT"
part5 = "ON"
part6 = "HALLOWEEN"

# TODO: Join all parts with spaces
passphrase = ""
print(passphrase)`,
      objective: "Concatenate all six words into one phrase separated by spaces.",
      requirements: ["Join all parts with ' ' between each", "Use + ' ' + to concatenate", "Create: 'NEVER TRUST USER INPUT ON HALLOWEEN'"],
      expectedOutput: "NEVER TRUST USER INPUT ON HALLOWEEN",
      hint: "Join with + ' ' + between each word.",
      errorFeedback: "Join all six parts with spaces between them to create the passphrase."
    },
    2: {
      part: 2,
      roomNumber: 10,
      roomTitle: "The Server Room - Final Escape",
      story: "Add the next phrase: 'HALLOWEEN PARADE'. *detective tail wagging excitedly*",
      imageUrl: "/images/server-room.jpg",
      initialCode: `phrase1 = "NEVER TRUST USER INPUT ON HALLOWEEN"
phrase2 = "HALLOWEEN PARADE"

# TODO: Combine the phrases with a space
full_phrase = ""
print(full_phrase)`,
      objective: "Combine two phrases with a space between them.",
      requirements: ["Join phrase1 and phrase2 with a space", "Use + ' ' + to concatenate", "Create: 'NEVER TRUST USER INPUT ON HALLOWEEN HALLOWEEN PARADE'"],
      expectedOutput: "NEVER TRUST USER INPUT ON HALLOWEEN HALLOWEEN PARADE",
      hint: "Use phrase1 + ' ' + phrase2 to join with space.",
      errorFeedback: "Concatenate phrase1 + ' ' + phrase2 with a space separator."
    },
    3: {
      part: 3,
      roomNumber: 10,
      roomTitle: "The Server Room - Final Escape",
      story: "Final assembly! Merge the last fragment: 'WITHOUT SALT AND GARLIC' into the complete passphrase. *howls at NIGHTINGALE* FOR FREEDOM!",
      imageUrl: "/images/server-room.jpg",
      initialCode: `part1 = "NEVER TRUST USER INPUT ON HALLOWEEN HALLOWEEN PARADE"
part2 = "WITHOUT SALT AND GARLIC"

# TODO: Combine both parts with a space
# The final message should be:
# NEVER TRUST USER INPUT ON HALLOWEEN HALLOWEEN PARADE WITHOUT SALT AND GARLIC
final_message = ""
print(final_message)`,
      objective: "Combine both parts to create the complete passphrase NIGHTINGALE requires.",
      requirements: ["Join part1 + ' ' + part2", "Add a space between the parts", "Match the exact output format"],
      expectedOutput: "NEVER TRUST USER INPUT ON HALLOWEEN HALLOWEEN PARADE WITHOUT SALT AND GARLIC",
      hint: "Use final_message = part1 + ' ' + part2",
      errorFeedback: "Join both parts with a space to create the final passphrase and escape the haunted codebase with Stack!"
    }
  }
};
