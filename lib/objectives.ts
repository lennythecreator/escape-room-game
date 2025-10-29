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
      initialCode: `# Combine the first and last name
first_name = "Jane"
last_name = "Smith"
full_name = first_name + " " + last_name
print(full_name)`,
      objective: "Combine two strings together using concatenation.",
      requirements: [
        "Use the + operator to join strings",
        "Add a space between the strings",
        "Print the combined result"
      ],
      expectedOutput: "Jane Smith",
      hint: "Join strings with + and include a space: first + ' ' + last",
      errorFeedback: "Don't forget the space between names. Use + with a ' ' in the middle or an f-string."
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
      initialCode: `# Check if the door code is correct
door_code = 1234
user_input = 1234

if user_input == door_code:
    print("Door unlocked!")
else:
    print("Access denied")`,
      objective: "Use an if statement to check a condition and execute code based on the result.",
      requirements: [
        "Write an if statement with a condition",
        "Use a comparison operator (==, !=, >, <)",
        "Include a colon (:) and proper indentation"
      ],
      expectedOutput: "Door unlocked!",
      hint: "if condition: then indent the block. Use == to compare values",
      errorFeedback: "Use == to compare equality. Check capitalization and punctuation in the printed text."
    },
    2: {
      part: 2,
      roomNumber: 3,
      roomTitle: "The Waiting Room",
      story: "*ears perk up* Sometimes we need a backup plan. Use else to handle when the condition is False.",
      imageUrl: "/images/waiting-room.jpg",
      initialCode: `# Check the patient's temperature
temperature = 38.5

if temperature > 37.5:
    print("Fever detected")
else:
    print("Temperature normal")`,
      objective: "Handle two different outcomes using if-else logic.",
      requirements: [
        "Use an if statement for the first condition",
        "Add an else clause for the alternative",
        "Both branches should have proper indentation"
      ],
      expectedOutput: "Fever detected",
      hint: "Use if ... else for two branches. Remember the colon and indentation",
      errorFeedback: "Check the threshold: it's > 37.5, not >=. Output text must match exactly."
    },
    3: {
      part: 3,
      roomNumber: 3,
      roomTitle: "The Waiting Room",
      story:
        "This lock has multiple security levels. We need elif to check several conditions in order. *investigates with magnifying glass*",
      imageUrl: "/images/waiting-room.jpg",
      initialCode: `# Determine access level based on clearance
clearance_level = 3

if clearance_level >= 5:
    print("Full access granted")
elif clearance_level >= 3:
    print("Partial access granted")
else:
    print("Access denied")`,
      objective: "Check multiple conditions using if, elif, and else statements.",
      requirements: [
        "Start with an if statement",
        "Add elif for additional conditions",
        "End with else for remaining cases"
      ],
      expectedOutput: "Partial access granted",
      hint: "Order your checks with if/elif/else from most specific to least",
      errorFeedback: "Order matters: the >=5 check must come before >=3. Ensure exact output text."
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
      initialCode: `# Check if the medication is in stock
medication_count = 15

if medication_count > 10:
    print("In stock")
else:
    print("Low stock")`,
      objective: "Use comparison operators to evaluate numeric conditions.",
      requirements: [
        "Use operators like ==, !=, <, >, <=, >=",
        "Compare numeric values",
        "Make decisions based on the comparison"
      ],
      expectedOutput: "In stock",
      hint: "Comparison operators: ==, !=, <, >, <=, >=",
      errorFeedback: "Use a numeric comparison, not a string. The condition is > 10, so 15 is 'In stock'."
    },
    2: {
      part: 2,
      roomNumber: 4,
      roomTitle: "The Pharmacy",
      story:
        "*whimpers nervously* Multiple conditions at once! Use 'and' when ALL must be true, 'or' when ANY can be true.",
      imageUrl: "/images/pharmacy.jpg",
      initialCode: `# Check if patient can receive treatment
age = 25
has_insurance = True

if age >= 18 and has_insurance:
    print("Treatment approved")
else:
    print("Treatment denied")`,
      objective: "Combine multiple conditions using boolean logic (and/or).",
      requirements: [
        "Use 'and' to require both conditions to be true",
        "Or use 'or' to require at least one condition",
        "Test multiple variables in one if statement"
      ],
      expectedOutput: "Treatment approved",
      hint: "Combine conditions with and/or: if a and b: ... or if a or b: ...",
      errorFeedback: "Use 'and' here, not 'or'. Both conditions must be true for approval."
    },
    3: {
      part: 3,
      roomNumber: 4,
      roomTitle: "The Pharmacy",
      story:
        "The final safe has nested security. We need if statements INSIDE if statements. *paws shaking slightly*",
      imageUrl: "/images/pharmacy.jpg",
      initialCode: `# Complex access control system
security_level = 3
has_keycard = True

if security_level >= 5:
    if has_keycard:
        print("Full access granted")
    else:
        print("Keycard required")
else:
    print("Insufficient clearance")`,
      objective: "Create nested if statements to handle complex decision logic.",
      requirements: [
        "Place an if statement inside another if statement",
        "Use proper indentation for nested blocks",
        "Handle multiple levels of conditions"
      ],
      expectedOutput: "Insufficient clearance",
      hint: "Indent nested if blocks consistently to reflect structure",
      errorFeedback: "Mind the nesting. Only check keycard if security_level >= 5; otherwise print 'Insufficient clearance'."
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
      initialCode: `# Print numbers 0 to 4 using range
for i in range(5):
    print(i)`,
      objective: "Use a for loop with range() to iterate a specific number of times.",
      requirements: [
        "Use the for keyword to create a loop",
        "Use range() to generate numbers",
        "Include a colon and proper indentation"
      ],
      expectedOutput: "0\n1\n2\n3\n4",
      hint: "range(n) yields 0..n-1; use for i in range(n): print(i)",
      errorFeedback: "range(5) yields 0..4. Don't use range(1,5) unless you want 1..4."
    },
    2: {
      part: 2,
      roomNumber: 5,
      roomTitle: "The Laboratory",
      story: "*sniffs test tubes* We can loop through lists directly without counting. Much more elegant!",
      imageUrl: "/images/laboratory.jpg",
      initialCode: `# Loop through a list of experiments
experiments = ["Test A", "Test B", "Test C"]
for experiment in experiments:
    print(experiment)`,
      objective: "Loop through each item in a list directly.",
      requirements: [
        "Use for...in syntax to iterate",
        "Loop through a list variable",
        "Access each item in the list"
      ],
      expectedOutput: "Test A\nTest B\nTest C",
      hint: "Iterate lists directly: for item in items: print(item)",
      errorFeedback: "Iterate the list itself, not indices, unless you need positions."
    },
    3: {
      part: 3,
      roomNumber: 5,
      roomTitle: "The Laboratory",
      story:
        "Sometimes we need BOTH the position AND the value. That's where enumerate() comes in! *tail wagging*",
      imageUrl: "/images/laboratory.jpg",
      initialCode: `# Use enumerate to get index and value
samples = ["Blood", "Tissue", "DNA"]
for index, sample in enumerate(samples):
    print(f"Sample {index}: {sample}")`,
      objective: "Use enumerate() to get both the index and value while looping.",
      requirements: [
        "Use enumerate() function with a list",
        "Unpack both index and value in the loop",
        "Access both the position and item"
      ],
      expectedOutput: "Sample 0: Blood\nSample 1: Tissue\nSample 2: DNA",
      hint: "enumerate(list) yields (index, value). Start index at 1 with enumerate(list, 1)",
      errorFeedback: "Make sure to unpack both parts: for index, value in enumerate(items): ..."
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
      initialCode: `# Count down from 5 to 1 using while
count = 5
while count > 0:
    print(count)
    count = count - 1`,
      objective: "Use a while loop to repeat code as long as a condition is true.",
      requirements: [
        "Use the while keyword with a condition",
        "Update the loop variable inside the loop",
        "Include proper indentation"
      ],
      expectedOutput: "5\n4\n3\n2\n1",
      hint: "Ensure the loop variable changes or you risk an infinite loop",
      errorFeedback: "Update the counter inside the loop: count = count - 1, or you'll loop forever."
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
      initialCode: `# Function with loop and conditionals
def count_critical_patients(patients):
    count = 0
    for patient in patients:
        if patient['status'] == 'critical':
            count = count + 1
    return count

# Test data
patient_list = [
    {'name': 'John', 'status': 'stable'},
    {'name': 'Jane', 'status': 'critical'},
    {'name': 'Bob', 'status': 'critical'}
]
result = count_critical_patients(patient_list)
print(f"Critical patients: {result}")`,
      objective: "Combine loops and conditionals inside a function to process data.",
      requirements: [
        "Create a function that accepts a parameter",
        "Use a for loop to iterate through data",
        "Use if statements to filter or count items"
      ],
      expectedOutput: "Critical patients: 2",
      hint: "Loop through items and check fields with if ... == ...",
      errorFeedback: "Compare exact string values (e.g., 'critical'). Case matters."
    },
    2: {
      part: 2,
      roomNumber: 9,
      roomTitle: "The Director's Office",
      story:
        "*sniffs frantically* We need a function that processes a list and returns filtered results. Data processing!",
      imageUrl: "/images/records-room.jpg",
      initialCode: `# Function that processes a list and returns results
def filter_and_transform(numbers):
    result = []
    for num in numbers:
        if num > 10:
            result.append(num * 2)
    return result

# Test
data = [5, 12, 8, 15, 20]
output = filter_and_transform(data)
print(output)`,
      objective: "Build a new list by filtering and transforming data in a function.",
      requirements: [
        "Loop through a list inside a function",
        "Use conditionals to filter items",
        "Use .append() to build a result list"
      ],
      expectedOutput: "[24, 30, 40]",
      hint: "Append to lists with list.append(value) inside the loop",
      errorFeedback: "Only numbers > 10 should be doubled and included. Don't print inside the function; return the list."
    },
    3: {
      part: 3,
      roomNumber: 9,
      roomTitle: "The Director's Office",
      story:
        "Nested loops - a loop inside a loop! The outer loop runs, and for EACH iteration, the inner loop completes fully. *mind blown*",
      imageUrl: "/images/records-room.jpg",
      initialCode: `# Nested loops in a function
def create_schedule(days, time_slots):
    schedule = []
    for day in days:
        for time in time_slots:
            schedule.append(f"{day} at {time}")
    return schedule

# Test
days = ['Monday', 'Tuesday']
times = ['9:00', '14:00']
result = create_schedule(days, times)
for appointment in result:
    print(appointment)`,
      objective: "Use nested loops inside a function to generate combinations.",
      requirements: [
        "Create a function with nested for loops",
        "Loop through multiple lists",
        "Combine elements from different lists"
      ],
      expectedOutput: "Monday at 9:00\nMonday at 14:00\nTuesday at 9:00\nTuesday at 14:00",
      hint: "Nest loops to produce combinations: for a in A: for b in B: ...",
      errorFeedback: "Use two loops (not zip). Append each combination as a formatted string in order."
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
