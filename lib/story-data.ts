// Story data for each room with Stack's dialogue
export const storyData = {
  1: {
    title: "The Entrance Hall",
    intro:
      "*A scruffy terrier in a tiny detective hat trots up to you* Woof! Name's Stack, detective extraordinaire. Found myself locked in here chasing a case. These doors are bugged with code puzzles - literally! Let's debug our way out together!",
    parts: {
      1: {
        story:
          "The keypad's got a calculation bug. Someone mixed up their operators! We need to fix the arithmetic to unlock it.",
        hint: "Python operators: + adds, - subtracts, * multiplies, / divides, // does integer division, % gives remainder",
      },
      2: {
        story:
          "*sniffs the control panel* The display system is broken. We need to print the correct unlock code to the screen.",
        hint: "Use print() to output. You can print strings with quotes or numbers without: print('text') or print(42)",
      },
      3: {
        story:
          "Final lock! *paws at the screen* We need to calculate AND display the result. Combine what you've learned!",
        hint: "You can do math inside print(): print(10 * 5 + 3). Order of operations matters!",
      },
    },
  },
  2: {
    title: "The Reception Area",
    intro:
      "*Stack's nose twitches* I smell old files and... fear. The reception computer has patient data we need. But the system's variables are all scrambled. Time to organize this data!",
    parts: {
      1: {
        story:
          "Variables are like name tags for data. We need to store information properly to access the filing system.",
        hint: "Create variables: patient_name = 'John'. Use descriptive names with underscores for spaces.",
      },
      2: {
        story:
          "*scratches behind ear with hind leg* Now we gotta combine these text strings. The system needs a full formatted message.",
        hint: "Join strings with +: first + ' ' + last, or use f-strings: f'{first} {last}' - much cleaner!",
      },
      3: {
        story:
          "The final lock needs us to work with numeric variables and perform calculations on them. *tail wagging intensifies*",
        hint: "Store numbers: age = 25, then use them: age + 5. You can update variables: age = age + 1",
      },
    },
  },
  3: {
    title: "The Waiting Room",
    intro:
      "*Stack stops and growls softly* Multiple doors, but only one is safe. We need conditional logic to make the right choice. One wrong move and... well, let's not find out.",
    parts: {
      1: {
        story: "If statements let us make decisions. Check the door code and only proceed if it's safe!",
        hint: "Syntax: if condition: (with colon!) then indent your code. Use ==, >, <, >=, <=, != to compare",
      },
      2: {
        story: "*ears perk up* Sometimes we need a backup plan. Use else to handle when the condition is False.",
        hint: "if condition: do_this else: do_that. Both blocks need proper indentation!",
      },
      3: {
        story:
          "This lock has multiple security levels. We need elif to check several conditions in order. *investigates with magnifying glass*",
        hint: "Chain them: if x >= 90: 'A' elif x >= 80: 'B' elif x >= 70: 'C' else: 'F'",
      },
    },
  },
  4: {
    title: "The Pharmacy",
    intro:
      "*Stack sniffs medicine bottles carefully* The pharmacy inventory system is corrupted. We need boolean logic to find the right medications. This is getting serious - I can hear something in the vents...",
    parts: {
      1: {
        story: "We need to compare values precisely. The wrong medication could be dangerous!",
        hint: "Comparison operators: == (equal), != (not equal), < (less), > (greater), <= (at most), >= (at least)",
      },
      2: {
        story:
          "*whimpers nervously* Multiple conditions at once! Use 'and' when ALL must be true, 'or' when ANY can be true.",
        hint: "if age >= 18 and has_id: or if is_weekend or is_holiday: - combine conditions with and/or",
      },
      3: {
        story:
          "The final safe has nested security. We need if statements INSIDE if statements. *paws shaking slightly*",
        hint: "Indent twice for nested ifs: if outer: (indent) if inner: (indent more) do_thing",
      },
    },
  },
  5: {
    title: "The Laboratory",
    intro:
      "*Stack's detective hat falls off as he runs* The lab equipment is running in loops! We need to master for loops to shut down these experiments before they... *CRASH* ...too late for that one.",
    parts: {
      1: {
        story: "For loops repeat actions. We need to count through a sequence to disable the equipment!",
        hint: "for i in range(10): loops 10 times (0-9). range(1, 11) gives 1-10. range(0, 10, 2) counts by 2s",
      },
      2: {
        story: "*sniffs test tubes* We can loop through lists directly without counting. Much more elegant!",
        hint: "for item in my_list: processes each item. Works with lists, strings, anything iterable!",
      },
      3: {
        story: "Sometimes we need BOTH the position AND the value. That's where enumerate() comes in! *tail wagging*",
        hint: "for index, value in enumerate(list): gives you both. Starts at 0 by default, or enumerate(list, 1) to start at 1",
      },
    },
  },
  6: {
    title: "The Patient Ward",
    intro:
      "*Stack's ears flatten* The patient monitoring systems are stuck in infinite loops. We need while loops and loop control to fix them. I hear footsteps... we need to hurry!",
    parts: {
      1: {
        story: "While loops keep going as long as a condition is True. But be careful - infinite loops are dangerous!",
        hint: "while condition: keeps looping. Make sure something CHANGES to eventually make it False! counter = counter + 1",
      },
      2: {
        story: "*scratches at door frantically* We can escape loops early with break when we find what we need!",
        hint: "Use 'break' to exit a loop immediately: if found_it: break",
      },
      3: {
        story:
          "The 'continue' statement skips the rest of the current loop and jumps to the next iteration. *detective instincts tingling*",
        hint: "if skip_this: continue skips to next loop iteration without running code below it",
      },
    },
  },
  7: {
    title: "The Operating Theater",
    intro:
      "*Stack whimpers at the surgical equipment* These robotic arms are controlled by functions. Functions are reusable code blocks - the key to organized programming. And our key to survival!",
    parts: {
      1: {
        story: "Functions package code we can use over and over. Let's create one to control the equipment!",
        hint: "def function_name(): then indent your code. Call it with function_name(). Don't forget the parentheses!",
      },
      2: {
        story: "*tilts head curiously* Functions can accept inputs called parameters. Makes them way more flexible!",
        hint: "def greet(name, age): uses parameters. Call it: greet('Stack', 3). Order matters!",
      },
      3: {
        story:
          "Functions can send values back using return. This is how they give us results! *tail wagging excitedly*",
        hint: "return value sends it back. result = my_function() captures it. Without return, you get None!",
      },
    },
  },
  8: {
    title: "The Isolation Chamber",
    intro:
      "*Stack's fur stands on end* This is where they kept the dangerous cases. The security here is complex - we need advanced function techniques. *growls* Something's coming... I can smell it!",
    parts: {
      1: {
        story: "Default parameters give functions fallback values. Smart coding for flexible functions!",
        hint: "def greet(name='friend', excited=True): uses defaults if not provided. greet() or greet('Stack')",
      },
      2: {
        story: "*paws at multiple buttons* Functions can return multiple values at once using tuples!",
        hint: "return x, y, z returns multiple values. Catch them: a, b, c = function() or result = function() for tuple",
      },
      3: {
        story:
          "Functions can call other functions! Break complex problems into smaller helper functions. *detective brain activated*",
        hint: "Define helper functions first, then call them inside your main function. Keeps code organized!",
      },
    },
  },
  9: {
    title: "The Director's Office",
    intro:
      "*Stack finds an old photo* Wait... I remember this place. I was... *shakes head* No time! The director's office has the master controls. We need to combine EVERYTHING we've learned!",
    parts: {
      1: {
        story: "This challenge needs loops AND conditionals INSIDE a function. Real-world programming right here!",
        hint: "Create a function, use a for loop inside it, add if statements in the loop. Return your result!",
      },
      2: {
        story:
          "*sniffs frantically* We need a function that processes a list and returns filtered results. Data processing!",
        hint: "Loop through the list, check conditions with if, build a new list or calculate a value, return it",
      },
      3: {
        story:
          "Nested loops - a loop inside a loop! The outer loop runs, and for EACH iteration, the inner loop completes fully. *mind blown*",
        hint: "for i in range(3): (indent) for j in range(2): - inner loop runs 2 times for each of 3 outer iterations = 6 total",
      },
    },
  },
  10: {
    title: "The Server Room - Final Escape",
    intro:
      "*Stack's eyes widen* This is it... the server room. I remember now - I was the director's dog. When the system went rogue, it... it buried me in the code. Literally. I've been trapped as a ghost in the machine. But YOU can free us both! One final push!",
    parts: {
      1: {
        story:
          "The first firewall needs recursion - a function calling itself. It's like a dog chasing its own tail, but productive! *spins*",
        hint: "Recursion needs: 1) Base case (when to stop), 2) Recursive case (call itself with simpler input). def factorial(n): if n <= 1: return 1 else: return n * factorial(n-1)",
      },
      2: {
        story: "*barks excitedly* List comprehension - Python's secret weapon! Create lists in one elegant line!",
        hint: "[expression for item in list if condition] - like [x*2 for x in range(5) if x % 2 == 0] gives [0, 4, 8]",
      },
      3: {
        story:
          "This is it - the final lock. We need a complete program: functions, loops, conditionals, everything! *howls* For freedom! For debugging! For treats!",
        hint: "Break it down: 1) Define helper functions, 2) Use loops to process data, 3) Add conditionals for logic, 4) Return the final result. You've got this!",
      },
    },
  },
}

export function getStoryForRoom(roomNumber: number, partNumber: number) {
  const room = storyData[roomNumber as keyof typeof storyData]
  if (!room) return null

  return {
    title: room.title,
    intro: partNumber === 1 ? room.intro : undefined,
    story: room.parts[partNumber as keyof typeof room.parts]?.story,
    hint: room.parts[partNumber as keyof typeof room.parts]?.hint,
  }
}
