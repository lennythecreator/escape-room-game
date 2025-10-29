export interface ObjectiveType {
  part: number;
  imageUrl: string;
  initialCode: string;
  objective: string;
  requirements: string[];
  expectedOutput: string;
  hint: string;
  // New fields to couple with story and feedback
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
      story:
        "The keypad's got a calculation bug. Someone mixed up their operators! We need to fix the arithmetic to unlock it.",
      imageUrl: "/images/entrance-hall.jpg",
      initialCode: `# Find the secret number
secret = 7 * 6
print(secret)`,
      objective: "Calculate the secret number by multiplying 7 and 6 to unlock the first clue.",
      requirements: [
        "Use the * operator to multiply 7 and 6",
        "Print the result to reveal the secret number"
      ],
      expectedOutput: "42",
      hint: "Use the * operator for multiplication and print the result: print(7 * 6)",
      errorFeedback: "Check the operator: use * (multiplication), not +. Also print the numeric result, not a string literal."
    },
    2: {
      part: 2,
      roomNumber: 1,
      roomTitle: "The Entrance Hall",
      story:
        "*sniffs the control panel* The display system is broken. We need to print the correct unlock code to the screen.",
      imageUrl: "/images/entrance-hall.jpg",
      initialCode: `# Create the patient ID
patient_name = "Dr. Elias"
patient_id = "ID-" + patient_name
print(patient_id)`,
      objective: "Combine strings to create a complete patient ID for the asylum records.",
      requirements: [
        "Use string concatenation with the + operator",
        "Combine 'ID-' with the patient name"
      ],
      expectedOutput: "ID-Dr. Elias",
      hint: "Concatenate strings with +. Example: 'ID-' + name",
      errorFeedback: "Mind spacing and quotes. Ensure you add 'ID-' directly before the name and print the combined string."
    },
    3: {
      part: 3,
      roomNumber: 1,
      roomTitle: "The Entrance Hall",
      story:
        "Final lock! *paws at the screen* We need to calculate AND display the result. Combine what you've learned!",
      imageUrl: "/images/entrance-hall.jpg",
      initialCode: `# Calculate remaining rooms
total_rooms = 13
explored_rooms = 5
remaining = total_rooms - explored_rooms
print(f"Rooms left to explore: {remaining}")`,
      objective: "Calculate how many rooms are left to explore in the asylum.",
      requirements: [
        "Subtract explored rooms from total rooms",
        "Use an f-string to format the output message"
      ],
      expectedOutput: "Rooms left to explore: 8",
      hint: "Use subtraction and f-strings: remaining = total - explored; print(f\"Rooms left: {remaining}\")",
      errorFeedback: "Watch exact text matching. Use the same phrasing and punctuation, and calculate 13 - 5 = 8."
    }
  },
  2: {
    1: {
      part: 1,
      roomNumber: 2,
      roomTitle: "The Reception Area",
      roomIntro:
        "*Stack's nose twitches* I smell old files and... fear. The reception computer has patient data we need. But the system's variables are all scrambled. Time to organize this data!",
      story:
        "Variables are like name tags for data. We need to store information properly to access the filing system.",
      imageUrl: "/images/reception.jpg",
      initialCode: `# Create a variable to store the patient name
patient_name = "John Doe"
print(patient_name)`,
      objective: "Create a variable to store text data and display it.",
      requirements: [
        "Use the = operator to assign a value to a variable",
        "Store a string (text in quotes)",
        "Print the variable"
      ],
      expectedOutput: "John Doe",
      hint: "Assign strings with = and print: name = 'John'; print(name)",
      errorFeedback: "Print the variable itself, not a hardcoded string. Ensure quotes around text."
    },
    2: {
      part: 2,
      roomNumber: 2,
      roomTitle: "The Reception Area",
      story:
        "*scratches behind ear with hind leg* Now we gotta combine these text strings. The system needs a full formatted message.",
      imageUrl: "/images/reception.jpg",
      initialCode: `# Patient ID formatting - BUG: Missing space!
first = "Jane"
last = "Smith"

# BUG: The strings are concatenated but missing the space between them!
full_name = first + last
print(full_name)`,
      objective: "Fix the string concatenation - add a space between the first and last name.",
      requirements: [
        "Use the + operator with three parts: first + ' ' + last",
        "Add quotes with a space inside: ' '",
        "Combine: first + ' ' + last"
      ],
      expectedOutput: "Jane Smith",
      hint: "Concatenate three parts: variable + space + variable",
      errorFeedback: "Add ' ' (space in quotes) between the variables: first + ' ' + last"
    },
    3: {
      part: 3,
      roomNumber: 2,
      roomTitle: "The Reception Area",
      story:
        "The final lock needs us to work with numeric variables and perform calculations on them. *tail wagging intensifies*",
      imageUrl: "/images/reception.jpg",
      initialCode: `# Calculate the total using variables
rooms_unlocked = 2
rooms_remaining = 8
total_rooms = rooms_unlocked + rooms_remaining
print(total_rooms)`,
      objective: "Use variables to perform arithmetic and calculate a total.",
      requirements: [
        "Create variables with numeric values",
        "Add the variables together",
        "Print the total"
      ],
      expectedOutput: "10",
      hint: "Add numeric variables and print: total = a + b; print(total)",
      errorFeedback: "Make sure both values are numbers, not strings. The total should be 10."
    }
  },
  3: {
    1: {
      part: 1,
      roomNumber: 3,
      roomTitle: "The Waiting Room",
      roomIntro:
        "*Stack stops and growls softly* Multiple doors, but only one is safe. We need conditional logic to make the right choice. One wrong move and... well, let's not find out.",
      story: "If statements let us make decisions. Check the door code and only proceed if it's safe!",
      imageUrl: "/images/waiting-room.jpg",
      initialCode: `# Check if the door code is correct - but something's wrong!
door_code = 1234
user_input = 1234

if user_input = door_code:  # BUG: Missing a '=' sign!
    print("Door unlocked!")
else
    print("Access denied")`,
      objective: "Fix the bugged door lock code to check if the entry matches the correct door code.",
      requirements: [
        "Fix the comparison operator (needs == instead of =)",
        "Fix the else statement (needs a colon : after else)",
        "Make sure the condition properly compares the values"
      ],
      expectedOutput: "Door unlocked!",
      hint: "Use == to compare equality. Don't forget the colon after else!",
      errorFeedback: "Use == for comparison (not =), and add a colon after else."
    },
    2: {
      part: 2,
      roomNumber: 3,
      roomTitle: "The Waiting Room",
      story: "*ears perk up* Sometimes we need a backup plan. Use else to handle when the condition is False.",
      imageUrl: "/images/waiting-room.jpg",
      initialCode: `# Emergency patient monitoring system - incomplete!
# TODO: Complete the temperature check logic
temperature = 38.5

# FIX: Add the missing conditional logic here
# Should check if temperature exceeds normal (37.5)
# Print "Fever detected" if above normal, else print "Temperature normal"
`,
      objective: "Complete the missing patient temperature monitoring logic using if-else statements.",
      requirements: [
        "Add an if statement to check if temperature > 37.5",
        "Print 'Fever detected' if temperature is high",
        "Add an else clause to print 'Temperature normal'"
      ],
      expectedOutput: "Fever detected",
      hint: "Use if temperature > 37.5: then indent print statements for both cases",
      errorFeedback: "Add the if condition with proper indentation. Don't forget the else clause."
    },
    3: {
      part: 3,
      roomNumber: 3,
      roomTitle: "The Waiting Room",
      story:
        "This lock has multiple security levels. We need elif to check several conditions in order. *investigates with magnifying glass*",
      imageUrl: "/images/waiting-room.jpg",
      initialCode: `# Security access system - multiple levels
clearance_level = 3

# FIXME: The order of these checks is WRONG and causes security issues!
if clearance_level >= 3:
    print("Partial access granted")
elif clearance_level >= 5:
    print("Full access granted")
else:
    print("Access denied")`,
      objective: "Fix the security system by reordering the conditional checks from highest to lowest priority.",
      requirements: [
        "Reorder checks from highest (>= 5) to lowest (< 3)",
        "Use if for highest access, elif for middle, else for denied",
        "Ensure proper order prevents lower levels from matching first"
      ],
      expectedOutput: "Partial access granted",
      hint: "Always check highest thresholds first in if/elif chains to prevent early matches",
      errorFeedback: "Put the >= 5 check BEFORE >= 3, otherwise partial access will trigger first for level 5+."
    }
  },
  4: {
    1: {
      part: 1,
      roomNumber: 4,
      roomTitle: "The Pharmacy",
      roomIntro:
        "*Stack sniffs medicine bottles carefully* The pharmacy inventory system is corrupted. We need boolean logic to find the right medications. This is getting serious - I can hear something in the vents...",
      story: "We need to compare values precisely. The wrong medication could be dangerous!",
      imageUrl: "/images/pharmacy.jpg",
      initialCode: `# Check if critical medication is in stock
medication_count = 15

# BUG: The threshold is wrong! It should check if count is greater than or equal to 15 (critical stock level)
if medication_count > 15:
    print("In stock")
else:
    print("Low stock")`,
      objective: "Fix the medication inventory check - it's using the wrong comparison operator.",
      requirements: [
        "Change the comparison operator to >= 15 (not just > 15)",
        "The medication_count is 15, which should be considered 'In stock'",
        "Print 'In stock' when count meets or exceeds the threshold"
      ],
      expectedOutput: "In stock",
      hint: "Use >= for 'greater than or equal to'. Count of exactly 15 should be 'In stock'",
      errorFeedback: "Change > 15 to >= 15. At exactly 15 units, the medication should still be considered in stock."
    },
    2: {
      part: 2,
      roomNumber: 4,
      roomTitle: "The Pharmacy",
      story:
        "*whimpers nervously* Multiple conditions at once! Use 'and' when ALL must be true, 'or' when ANY can be true.",
      imageUrl: "/images/pharmacy.jpg",
      initialCode: `# Patient medication safety check - has a critical bug!
age = 25
has_insurance = True
severity = "critical"

# BUG: Wrong boolean operator - 'or' allows treatment with only ONE condition!
# We need BOTH age >= 18 AND severity != 'critical' for safety
if age >= 18 or severity != "critical":
    print("Treatment approved")
else:
    print("Treatment denied - too dangerous")`,
      objective: "Fix the safety check - change the boolean operator from 'or' to 'and' for proper safety.",
      requirements: [
        "Replace 'or' with 'and' to require BOTH conditions",
        "Both age >= 18 AND severity != 'critical' must be true",
        "Critical patients should be denied for safety"
      ],
      expectedOutput: "Treatment denied - too dangerous",
      hint: "Use 'and' when BOTH conditions must be true. 'or' means ANY condition can be true.",
      errorFeedback: "Change 'or' to 'and'. Critical patients should NOT be treated even if they're 18+."
    },
    3: {
      part: 3,
      roomNumber: 4,
      roomTitle: "The Pharmacy",
      story:
        "The final safe has nested security. We need if statements INSIDE if statements. *paws shaking slightly*",
      imageUrl: "/images/pharmacy.jpg",
      initialCode: `# Restricted medication access - missing nested condition!
security_level = 5
has_keycard = True

# TODO: Add proper nested logic
# First check: Is security level high enough (>= 5)?
# Then check nested: Does user have a keycard?
# Print accordingly for: Full access, Keycard required, or Insufficient clearance
`,
      objective: "Complete the nested security check - add the missing nested if statement for keycard verification.",
      requirements: [
        "First check if security_level >= 5",
        "If yes, then check if has_keycard (nested if inside)",
        "Print 'Full access granted' only if both checks pass",
        "Add else for 'Keycard required' within the outer if",
        "Add else for 'Insufficient clearance' for outer if"
      ],
      expectedOutput: "Full access granted",
      hint: "Indent the keycard check inside the security_level check. Two levels of if/else needed.",
      errorFeedback: "Create nested if: if security_level >= 5: (indent) if has_keycard: (indent more) print 'Full access granted'"
    }
  },
  5: {
    1: {
      part: 1,
      roomNumber: 5,
      roomTitle: "The Laboratory",
      roomIntro:
        "*Stack's detective hat falls off as he runs* The lab equipment is running in loops! We need to master for loops to shut down these experiments before they... *CRASH* ...too late for that one.",
      story: "For loops repeat actions. We need to count through a sequence to disable the equipment!",
      imageUrl: "/images/laboratory.jpg",
      initialCode: `# Lab shutdown sequence - malfunctioning counter!
# Need to print 0 to 4 to disarm all 5 safety systems

# BUG: Missing the print statement in the loop!
for i in range(5):
    # TODO: Add the print statement here to output each number
    
# The loop should print each number from 0 to 4`,
      objective: "Complete the shutdown sequence by adding the missing print statement inside the loop.",
      requirements: [
        "Add print(i) inside the for loop (with proper indentation)",
        "The range(5) goes from 0 to 4 inclusive",
        "Print each number on a separate line"
      ],
      expectedOutput: "0\n1\n2\n3\n4",
      hint: "Add print(i) inside the loop. Remember proper indentation (4 spaces or 1 tab).",
      errorFeedback: "Add the print statement inside the for loop with proper indentation."
    },
    2: {
      part: 2,
      roomNumber: 5,
      roomTitle: "The Laboratory",
      story: "*sniffs test tubes* We can loop through lists directly without counting. Much more elegant!",
      imageUrl: "/images/laboratory.jpg",
      initialCode: `# Process lab sample data
samples = ["Blood", "Tissue", "DNA", "Urine"]

# BUG: Trying to use an index that doesn't exist!
# Should loop through the items directly, not use a counter
for i in range(len(samples)):
    print(samples[i])`,
      objective: "Fix the loop - instead of using range() with indices, iterate directly through the list items.",
      requirements: [
        "Change from for i in range(len(samples)) to for sample in samples",
        "Access the item directly in the print statement",
        "Remove the index access - just print the variable"
      ],
      expectedOutput: "Blood\nTissue\nDNA\nUrine",
      hint: "Iterate directly: for sample in samples: then print(sample), not print(samples[i])",
      errorFeedback: "Loop through the list directly with 'for sample in samples:' and print(sample), not the indexed version."
    },
    3: {
      part: 3,
      roomNumber: 5,
      roomTitle: "The Laboratory",
      story:
        "Sometimes we need BOTH the position AND the value. That's where enumerate() comes in! *tail wagging*",
      imageUrl: "/images/laboratory.jpg",
      initialCode: `# Lab sample tracking system
samples = ["Blood", "Tissue", "DNA"]

# BUG: Not unpacking enumerate properly! Trying to treat it as a single value
for sample_data in enumerate(samples):
    print(f"Sample {sample_data[0]}: {sample_data[1]}")`,
      objective: "Fix the enumerate unpacking - use proper tuple unpacking to get index and value separately.",
      requirements: [
        "Change the loop variable to unpack two values: for index, sample in enumerate(samples)",
        "Use the unpacked variables directly in the print statement",
        "Don't use square bracket indexing on the enumerate result"
      ],
      expectedOutput: "Sample 0: Blood\nSample 1: Tissue\nSample 2: DNA",
      hint: "Unpack enumerate with two variables: for index, sample in enumerate(samples):",
      errorFeedback: "Change to 'for index, sample in enumerate(samples):' to properly unpack both values at once."
    }
  },
  6: {
    1: {
      part: 1,
      roomNumber: 6,
      roomTitle: "The Patient Ward",
      roomIntro:
        "*Stack's ears flatten* The patient monitoring systems are stuck in infinite loops. We need while loops and loop control to fix them. I hear footsteps... we need to hurry!",
      story:
        "While loops keep going as long as a condition is True. But be careful - infinite loops are dangerous!",
      imageUrl: "/images/patient-ward.jpg",
      initialCode: `# Patient monitoring countdown
count = 5

# BUG: INFINITE LOOP! The counter never decreases!
while count > 0:
    print(count)
    # TODO: Decrement the counter to prevent infinite loop
    
# Should count down from 5 to 1`,
      objective: "Fix the infinite loop - add the missing line to decrement the counter.",
      requirements: [
        "Add count = count - 1 inside the while loop",
        "Place it after the print statement",
        "Ensure proper indentation to match the print statement"
      ],
      expectedOutput: "5\n4\n3\n2\n1",
      hint: "Add 'count = count - 1' inside the loop with same indentation as print",
      errorFeedback: "Add the decrement line: count = count - 1. Without it, the loop runs forever!"
    },
    2: {
      part: 2,
      roomNumber: 6,
      roomTitle: "The Patient Ward",
      story: "*scratches at door frantically* We can escape loops early with break when we find what we need!",
      imageUrl: "/images/patient-ward.jpg",
      initialCode: `# Find the first number divisible by 7
number = 1
while number < 100:
    if number % 7 == 0:
        print(f"Found: {number}")
        break
    number = number + 1`,
      objective: "Use the break statement to exit a loop early when a condition is met.",
      requirements: [
        "Create a while loop",
        "Check a condition inside the loop",
        "Use break to stop the loop"
      ],
      expectedOutput: "Found: 7",
      hint: "Use break to exit immediately once the condition is met",
      errorFeedback: "Place break inside the if block that detects divisibility; otherwise the loop won't stop."
    },
    3: {
      part: 3,
      roomNumber: 6,
      roomTitle: "The Patient Ward",
      story:
        "The 'continue' statement skips the rest of the current loop and jumps to the next iteration. *detective instincts tingling*",
      imageUrl: "/images/patient-ward.jpg",
      initialCode: `# Print only even numbers from 1 to 10
number = 1
while number <= 10:
    if number % 2 == 0:
        print(number)
    number = number + 1`,
      objective: "Combine while loops with conditionals to control loop behavior.",
      requirements: [
        "Use a while loop to iterate",
        "Add an if statement inside the loop",
        "Control what gets executed based on conditions"
      ],
      expectedOutput: "2\n4\n6\n8\n10",
      hint: "Use modulo % to test even numbers: if n % 2 == 0",
      errorFeedback: "Increment regardless of parity; otherwise odds might create an infinite loop."
    }
  },
  7: {
    1: {
      part: 1,
      roomNumber: 7,
      roomTitle: "The Operating Theater",
      roomIntro:
        "*Stack whimpers at the surgical equipment* These robotic arms are controlled by functions. Functions are reusable code blocks - the key to organized programming. And our key to survival!",
      story:
        "Functions package code we can use over and over. Let's create one to control the equipment!",
      imageUrl: "/images/operating-theater.jpg",
      initialCode: `# Define a function that prints a greeting
def greet():
    print("Hello from the Operating Theater")

# Call the function
greet()`,
      objective: "Define and call a basic function with no parameters.",
      requirements: [
        "Use def keyword to define a function",
        "Include parentheses and a colon",
        "Call the function using its name with ()"
      ],
      expectedOutput: "Hello from the Operating Theater",
      hint: "Define with def name(): then indent; call it with name()",
      errorFeedback: "Don't forget to CALL the function after defining it; otherwise nothing prints."
    },
    2: {
      part: 2,
      roomNumber: 7,
      roomTitle: "The Operating Theater",
      story: "*tilts head curiously* Functions can accept inputs called parameters. Makes them way more flexible!",
      imageUrl: "/images/operating-theater.jpg",
      initialCode: `# Define a function that takes a name parameter
def greet_patient(name):
    print(f"Hello, {name}")

# Call the function with an argument
greet_patient("Dr. Smith")`,
      objective: "Create a function that accepts parameters to make it reusable.",
      requirements: [
        "Add parameters inside the function definition",
        "Use the parameters inside the function",
        "Pass arguments when calling the function"
      ],
      expectedOutput: "Hello, Dr. Smith",
      hint: "Parameters in definition; arguments in call: greet(name)",
      errorFeedback: "Make sure the parameter name is used inside the function and you pass an argument in the call."
    },
    3: {
      part: 3,
      roomNumber: 7,
      roomTitle: "The Operating Theater",
      story:
        "Functions can send values back using return. This is how they give us results! *tail wagging excitedly*",
      imageUrl: "/images/operating-theater.jpg",
      initialCode: `# Define a function that returns a value
def calculate_dosage(weight, rate):
    dosage = weight * rate
    return dosage

# Call and print the result
result = calculate_dosage(70, 0.5)
print(result)`,
      objective: "Use the return statement to send a value back from a function.",
      requirements: [
        "Define a function with parameters",
        "Calculate a result inside the function",
        "Use return to send the value back"
      ],
      expectedOutput: "35.0",
      hint: "Use return to send values; capture with result = func()",
      errorFeedback: "Return the computed value, don't print inside the function if the caller needs to print it."
    }
  },
  8: {
    1: {
      part: 1,
      roomNumber: 8,
      roomTitle: "The Isolation Chamber",
      roomIntro:
        "*Stack's fur stands on end* This is where they kept the dangerous cases. The security here is complex - we need advanced function techniques. *growls* Something's coming... I can smell it!",
      story: "Default parameters give functions fallback values. Smart coding for flexible functions!",
      imageUrl: "/images/isolation-chamber.jpg",
      initialCode: `# Function with default parameter
def set_alarm(time="08:00"):
    print(f"Alarm set for {time}")

# Call with and without argument
set_alarm()
set_alarm("06:30")`,
      objective: "Create a function with default parameter values.",
      requirements: [
        "Set a default value in the parameter definition",
        "Call the function with and without arguments",
        "The default value should be used when no argument is provided"
      ],
      expectedOutput: "Alarm set for 08:00\nAlarm set for 06:30",
      hint: "Provide defaults in def: def f(x=10): ...; f() uses 10",
      errorFeedback: "Define the default in the function signature; don't override it inside the body."
    },
    2: {
      part: 2,
      roomNumber: 8,
      roomTitle: "The Isolation Chamber",
      story: "*paws at multiple buttons* Functions can return multiple values at once using tuples!",
      imageUrl: "/images/isolation-chamber.jpg",
      initialCode: `# Function returning multiple values
def get_patient_stats(age, weight):
    bmi = weight / ((age / 100) ** 2)
    category = "Normal" if 18.5 <= bmi <= 24.9 else "Check"
    return bmi, category

# Receive multiple return values
bmi_value, health_category = get_patient_stats(25, 70)
print(f"BMI: {bmi_value}, Status: {health_category}")`,
      objective: "Return multiple values from a function and unpack them.",
      requirements: [
        "Return multiple values separated by commas",
        "Unpack the returned values into separate variables",
        "Use the unpacked values in your code"
      ],
      expectedOutput: "BMI: 112.0, Status: Check",
      hint: "return a, b, c returns a tuple; unpack with x, y = func()",
      errorFeedback: "Capture both returned values using tuple unpacking; don't ignore one inadvertently."
    },
    3: {
      part: 3,
      roomNumber: 8,
      roomTitle: "The Isolation Chamber",
      story:
        "Functions can call other functions! Break complex problems into smaller helper functions. *detective brain activated*",
      imageUrl: "/images/isolation-chamber.jpg",
      initialCode: `# Function calling another function
def calculate_total(price, quantity):
    return price * quantity

def apply_discount(total, discount_percent):
    discount = total * (discount_percent / 100)
    return total - discount

def final_price(price, quantity, discount):
    total = calculate_total(price, quantity)
    final = apply_discount(total, discount)
    return final

# Declare the result variable before using it
result = final_price(100, 3, 10)
print(f"Final price: $${'{'}result{'}'}")`,
      objective: "Create functions that call other functions to build complex logic.",
      requirements: [
        "Define multiple functions",
        "Call one function from inside another",
        "Chain function calls to solve a problem"
      ],
      expectedOutput: "Final price: $270.0",
      hint: "Compose functions: define helpers, then call them from a main function",
      errorFeedback: "Reuse helpers; don't duplicate logic. Ensure discount_percent is divided by 100 (percentage to fraction)."
    }
  },
  9: {
    1: {
      part: 1,
      roomNumber: 9,
      roomTitle: "The Director's Office",
      roomIntro:
        "*Stack finds an old photo* Wait... I remember this place. I was... *shakes head* No time! The director's office has the master controls. We need to combine EVERYTHING we've learned!",
      story:
        "This challenge needs loops AND conditionals INSIDE a function. Real-world programming right here!",
      imageUrl: "/images/records-room.jpg",
      initialCode: `# Analyze patient records to find critical cases
patient_records = [
    {'name': 'John Doe', 'status': 'stable', 'room': 101},
    {'name': 'Jane Smith', 'status': 'critical', 'room': 205},
    {'name': 'Bob Wilson', 'status': 'critical', 'room': 102},
    {'name': 'Alice Brown', 'status': 'stable', 'room': 203}
]

# TODO: Complete the function to count critical patients using dictionaries
def count_critical(patients):
    # Add loop through patients
    # Check if patient['status'] == 'critical'
    # Increment count
    # Return count


result = count_critical(patient_records)
print(f"Critical patients: {result}")`,
      objective: "Complete the function to count critical patients by iterating through dictionary records.",
      requirements: [
        "Add a for loop to iterate through the patients parameter",
        "Add an if statement to check patient['status'] == 'critical'",
        "Initialize and increment a counter variable",
        "Return the final count"
      ],
      expectedOutput: "Critical patients: 2",
      hint: "Use for patient in patients: then if patient['status'] == 'critical': increment a counter",
      errorFeedback: "Add the loop and conditional logic. Remember dictionaries use ['key'] syntax and case sensitivity."
    },
    2: {
      part: 2,
      roomNumber: 9,
      roomTitle: "The Director's Office",
      story:
        "*sniffs frantically* We need a function that processes a list and returns filtered results. Data processing!",
      imageUrl: "/images/records-room.jpg",
      initialCode: `# Security code processing - extracting valid codes
codes = ["Room101", "Room205", "Invalid", "Room307", "Broken", "Room412"]

# BUG: Should filter codes that start with "Room" and convert to uppercase
# Then count how many valid ones we found
valid_codes = []

# TODO: Complete the loop to:
# 1. Check if code starts with "Room"
# 2. If yes, convert it to uppercase and append to valid_codes
# 3. Print the list and count

for code in codes:
    pass  # Replace this!

print(f"Valid codes: {valid_codes}")
print(f"Count: {len(valid_codes)}")`,
      objective: "Complete the function to filter codes starting with 'Room' and convert them to uppercase.",
      requirements: [
        "Add if statement: if code.startswith('Room'):",
        "Use code.upper() to convert to uppercase",
        "Use valid_codes.append(uppercase_code) to add to list",
        "Properly indent all code inside the for loop"
      ],
      expectedOutput: "Valid codes: ['ROOM101', 'ROOM205', 'ROOM307', 'ROOM412']\nCount: 4",
      hint: "Use code.startswith('Room') and code.upper(). Remember string methods need dot notation.",
      errorFeedback: "Add if code.startswith('Room'): then append code.upper() to the list. Proper indentation required."
    },
    3: {
      part: 3,
      roomNumber: 9,
      roomTitle: "The Director's Office",
      story:
        "Nested loops - a loop inside a loop! The outer loop runs, and for EACH iteration, the inner loop completes fully. *mind blown*",
      imageUrl: "/images/records-room.jpg",
      initialCode: `# Generate all patient-room assignments
patients = ['Alice', 'Bob']
rooms = [101, 102, 103]

# BUG: Only has ONE loop instead of nested loops!
# Should create combinations: Alice-101, Alice-102, etc.
assignments = []

# TODO: Add the missing outer loop and fix the logic
for patient in patients:
    # Something is missing here - we need a nested loop!
    for room in rooms:
        assignments.append(f"{patient} -> Room {room}")

for assignment in assignments:
    print(assignment)`,
      objective: "Fix the nested loops - ensure BOTH loops are properly structured to create all patient-room combinations.",
      requirements: [
        "Verify the outer loop iterates through patients",
        "Verify the inner loop iterates through rooms",
        "Each iteration of the outer loop should complete ALL inner loop iterations"
      ],
      expectedOutput: "Alice -> Room 101\nAlice -> Room 102\nAlice -> Room 103\nBob -> Room 101\nBob -> Room 102\nBob -> Room 103",
      hint: "Both loops should be present with proper indentation. The inner loop should be indented under the outer loop.",
      errorFeedback: "Ensure both the for patient loop and for room loop are present with correct nesting (inner loop indented)."
    }
  },
  10: {
    1: {
      part: 1,
      roomNumber: 10,
      roomTitle: "The Server Room - Final Escape",
      roomIntro:
        "*Stack's eyes widen* This is it... the server room. I remember now - I was the director's dog. When the system went rogue, it... it buried me in the code. Literally. I've been trapped as a ghost in the machine. But YOU can free us both! One final push!",
      story:
        "The first firewall needs recursion - a function calling itself. It's like a dog chasing its own tail, but productive! *spins*",
      imageUrl: "/images/server-room.jpg",
      initialCode: `# Recursive function to calculate factorial
def factorial(n):
    if n == 0 or n == 1:
        return 1
    else:
        return n * factorial(n - 1)

# Test
result = factorial(5)
print(f"5! = {result}")`,
      objective: "Create a recursive function that calls itself to solve a problem.",
      requirements: [
        "Define a function that calls itself",
        "Include a base case to stop recursion",
        "Use the recursive call to break down the problem"
      ],
      expectedOutput: "5! = 120",
      hint: "Always include a base case in recursion to prevent infinite calls",
      errorFeedback: "Include a base case (n == 0 or 1). Ensure you multiply by factorial(n-1)."
    },
    2: {
      part: 2,
      roomNumber: 10,
      roomTitle: "The Server Room - Final Escape",
      story: "*barks excitedly* List comprehension - Python's secret weapon! Create lists in one elegant line!",
      imageUrl: "/images/server-room.jpg",
      initialCode: `# List comprehension to filter and transform
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Create a list of squares of even numbers
squares_of_evens = [num ** 2 for num in numbers if num % 2 == 0]

print(squares_of_evens)`,
      objective: "Use list comprehension to create a new list with filtering and transformation.",
      requirements: [
        "Use [expression for item in list] syntax",
        "Add an if condition to filter items",
        "Transform items with an expression"
      ],
      expectedOutput: "[4, 16, 36, 64, 100]",
      hint: "[expr for x in xs if cond] builds lists concisely",
      errorFeedback: "Filter first (even numbers), then square. Make sure to print the resulting list."
    },
    3: {
      part: 3,
      roomNumber: 10,
      roomTitle: "The Server Room - Final Escape",
      story:
        "This is it - the final lock. We need a complete program: functions, loops, conditionals, everything! *howls* For freedom! For debugging! For treats!",
      imageUrl: "/images/server-room.jpg",
      initialCode: `# Final challenge: Complete program combining everything
def analyze_security_codes(codes):
    # Filter codes that are greater than 100
    valid_codes = [code for code in codes if code > 100]
    
    # Calculate the sum of valid codes
    total = 0
    for code in valid_codes:
        total = total + code
    
    # Return both the count and total
    return len(valid_codes), total

def check_access(count, total):
    if count >= 3 and total > 500:
        return "ACCESS GRANTED"
    else:
        return "ACCESS DENIED"

# Main program
security_codes = [50, 150, 200, 75, 300, 125]
valid_count, code_sum = analyze_security_codes(security_codes)
access_status = check_access(valid_count, code_sum)

print(f"Valid codes: {valid_count}")
print(f"Total: {code_sum}")
print(f"Status: {access_status}")`,
      objective: "FINAL CHALLENGE: Combine all concepts to shut down the corrupted AI system.",
      requirements: [
        "Use multiple functions working together",
        "Apply list comprehension for filtering",
        "Use loops and conditionals for logic",
        "Return and unpack multiple values"
      ],
      expectedOutput: "Valid codes: 4\nTotal: 775\nStatus: ACCESS GRANTED",
      hint: "Break the problem into helper functions; compose them in main logic",
      errorFeedback: "Ensure filtering > 100 (not >=). Sum only valid codes. Access requires count >= 3 AND total > 500."
    }
  }
};
