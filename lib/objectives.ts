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
        "*A scruffy terrier in a tiny detective hat trots up* Woof! I am Stack. The hospital AI called NIGHTINGALE has gone rogue. It puzzles every door with code. We free the staff by debugging these locks.",
      story:
        "This keypad expects a computed value, not a hardcoded number. A maintenance note hints at operator precedence and one subtle type pitfall.",
      imageUrl: "/images/entrance-hall.jpg",
      initialCode: `# Compute the calibration checksum
# Bug: division yields a float, checksum must be an int
a, b, c = 7, 6, 2
secret = a * b + c / c
print(secret)  # should print an integer 42`,
      objective: "Produce the checksum as an integer using arithmetic and precedence rules.",
      requirements: [
        "Use only the variables a, b, c",
        "Ensure integer math for the division part",
        "Print an int, not a float or string"
      ],
      expectedOutput: "42",
      hint: "Force integer division where needed or cast explicitly. Parentheses can clarify intent.",
      errorFeedback:
        "Your checksum is a float or off by one. Fix the division so it evaluates to an int 1, then 7*6+1 becomes 42 exactly."
    },
    2: {
      part: 2,
      roomNumber: 1,
      roomTitle: "The Entrance Hall",
      story:
        "The display assembles an unlock token from parts. It rejects extra spaces and the wrong case.",
      imageUrl: "/images/entrance-hall.jpg",
      initialCode: `# Bug: wrong capitalization and missing period in title
title = "DR"
name = "elias"
token = "ID-" + title + "-" + name
print(token)  # needs 'ID-Dr. Elias' exactly`,
      objective: "Build a token using proper capitalization and exact spacing inside a format template.",
      requirements: [
        "Capitalize the title to 'Dr.' and the name to 'Elias'",
        "Embed them to form 'ID-Dr. Elias'",
        "Print exactly the token with no trailing spaces"
      ],
      expectedOutput: "ID-Dr. Elias",
      hint: "Use title case and insert a period after Dr. Be mindful of a single space before Elias.",
      errorFeedback:
        "Token mismatch. Fix the period after Dr., use proper capitalization for Elias, and ensure exactly one space before Elias."
    },
    3: {
      part: 3,
      roomNumber: 1,
      roomTitle: "The Entrance Hall",
      story:
        "The hall map reports unknown rooms. NIGHTINGALE only unlocks after you compute remaining rooms and label singular vs plural correctly.",
      imageUrl: "/images/entrance-hall.jpg",
      initialCode: `# Bug: label computed but not used, and subtraction must be correct
total_rooms = 13
explored_rooms = 5
remaining = total_rooms - explored_rooms
label = "room" if remaining == 1 else "rooms"
print(f"Rooms left to explore: {remaining}")  # expected text must match`,
      objective: "Compute remaining and choose 'room' or 'rooms' correctly.",
      requirements: [
        "Subtract explored from total",
        "Choose singular when remaining == 1",
        "Print: Rooms left to explore: 8"
      ],
      expectedOutput: "Rooms left to explore: 8",
      hint: "Use a conditional expression to pick the label, even if 8 is plural.",
      errorFeedback:
        "If your math is wrong or the text differs, the lock fails. Keep the exact phrase and ensure 13 - 5 equals 8."
    }
  },
  2: {
    1: {
      part: 1,
      roomNumber: 2,
      roomTitle: "The Reception Area",
      roomIntro:
        "*Stack sniffs a card index* NIGHTINGALE garbled patient records. Variables must hold the right types before the parser accepts them.",
      story:
        "The parser rejects hardcoded prints and wrong types. It checks that a variable is used and contains text.",
      imageUrl: "/images/reception.jpg",
      initialCode: `# Bug: printing a literal instead of the cleaned variable
patient_name = "  John Doe  "
print("John Doe")`,
      objective: "Normalize and print the variable value, not a literal.",
      requirements: [
        "Strip leading and trailing spaces from the variable",
        "Do not reassign a new literal",
        "Print the variable itself"
      ],
      expectedOutput: "John Doe",
      hint: "Use .strip() to normalize whitespace, then print the variable.",
      errorFeedback:
        "You bypassed the variable entirely or left extra spaces. Clean patient_name with .strip() and print that variable."
    },
    2: {
      part: 2,
      roomNumber: 2,
      roomTitle: "The Reception Area",
      story:
        "Full names must render as 'Last, First' with exactly one space after the comma.",
      imageUrl: "/images/reception.jpg",
      initialCode: `# Bug: wrong order and format
first_name = "Jane"
last_name = "Smith"
full_name = first_name + " " + last_name
print(full_name)  # needs 'Smith, Jane'`,
      objective: "Reformat names as 'Last, First'.",
      requirements: [
        "Use the existing variables",
        "Include a comma and one space",
        "Print exactly Smith, Jane"
      ],
      expectedOutput: "Smith, Jane",
      hint: "Use an f-string like f\"{last_name}, {first_name}\".",
      errorFeedback:
        "Order or spacing is off. Output must be exactly 'Smith, Jane' with one space after the comma."
    },
    3: {
      part: 3,
      roomNumber: 2,
      roomTitle: "The Reception Area",
      story:
        "The room ledger mixes strings and numbers. NIGHTINGALE will only add if both are numeric.",
      imageUrl: "/images/reception.jpg",
      initialCode: `# Bug: string plus int causes concatenation or error
rooms_unlocked = "2"
rooms_remaining = 8
total_rooms = rooms_unlocked + rooms_remaining
print(total_rooms)`,
      objective: "Convert types so arithmetic works, not concatenation.",
      requirements: [
        "Convert rooms_unlocked to an int",
        "Add numerically",
        "Print 10"
      ],
      expectedOutput: "10",
      hint: "Use int(...) around the numeric string.",
      errorFeedback:
        "Looks like you concatenated '2' and 8 or threw an error. Cast rooms_unlocked to int before adding."
    }
  },
  3: {
    1: {
      part: 1,
      roomNumber: 3,
      roomTitle: "The Waiting Room",
      roomIntro:
        "*Stack points at a keypad* NIGHTINGALE validates a code with strict equality and type checks.",
      story: "If user input comes as a string, the check must account for it.",
      imageUrl: "/images/waiting-room.jpg",
      initialCode: `# Bug: comparing different types
door_code = 1234
user_input = "1234"
if user_input == door_code:
    print("Door unlocked!")
else:
    print("Access denied")`,
      objective: "Compare values with correct types.",
      requirements: [
        "Cast to a common type before comparing",
        "Preserve exact output strings",
        "Use == only after conversion"
      ],
      expectedOutput: "Door unlocked!",
      hint: "Convert user_input to int before compare.",
      errorFeedback:
        "Type mismatch. Convert the string input to int or the int code to str before using ==."
    },
    2: {
      part: 2,
      roomNumber: 3,
      roomTitle: "The Waiting Room",
      story:
        "A triage sensor signals fever only if strictly greater than a threshold. It rejects greater or equal.",
      imageUrl: "/images/waiting-room.jpg",
      initialCode: `# Bug: wrong operator allows threshold as fever
temperature = 37.5
if temperature >= 37.5:
    print("Fever detected")
else:
    print("Temperature normal")`,
      objective: "Use the strict operator required by policy.",
      requirements: [
        "Use > not >=",
        "Match exact output text",
        "Do not change the numeric value"
      ],
      expectedOutput: "Temperature normal",
      hint: "Evaluation is strict. Only values above 37.5 count as fever.",
      errorFeedback:
        "37.5 itself is not a fever. Change the comparison to use > 37.5."
    },
    3: {
      part: 3,
      roomNumber: 3,
      roomTitle: "The Waiting Room",
      story:
        "Access levels come from badges. Higher checks must run first or you grant too much access.",
      imageUrl: "/images/waiting-room.jpg",
      initialCode: `# Bug: ordering grants partial access before checking full
clearance_level = 3
if clearance_level >= 3:
    print("Partial access granted")
elif clearance_level >= 5:
    print("Full access granted")
else:
    print("Access denied")`,
      objective: "Order your conditions correctly.",
      requirements: [
        "Place the >= 5 check first",
        "Then check >= 3",
        "Keep the same outputs"
      ],
      expectedOutput: "Partial access granted",
      hint: "From most specific to least specific.",
      errorFeedback:
        "Your first condition shadows the second. Check >= 5 before >= 3."
    }
  },
  4: {
    1: {
      part: 1,
      roomNumber: 4,
      roomTitle: "The Pharmacy",
      roomIntro:
        "*Stack noses a stock console* The console flags stock as In stock only when strictly above the threshold.",
      story: "The threshold is configurable. Read and compare correctly.",
      imageUrl: "/images/pharmacy.jpg",
      initialCode: `# Bug: using >= violates the strict policy
medication_count = 15
threshold = 10
if medication_count >= threshold:
    print("In stock")
else:
    print("Low stock")`,
      objective: "Use the operator that matches the policy.",
      requirements: [
        "Print In stock only if count > threshold",
        "Otherwise print Low stock",
        "Do not change the numbers"
      ],
      expectedOutput: "In stock",
      hint: "Use > with a strict policy.",
      errorFeedback:
        "At threshold exactly 10 it should be Low stock. Replace >= with >."
    },
    2: {
      part: 2,
      roomNumber: 4,
      roomTitle: "The Pharmacy",
      story:
        "Treatment requires adult age and valid insurance, or an override token from a physician.",
      imageUrl: "/images/pharmacy.jpg",
      initialCode: `# Bug: override token is ignored
age = 25
has_insurance = True
override_token = False
if age >= 18 and has_insurance:
    print("Treatment approved")
else:
    print("Treatment denied")`,
      objective: "Combine conditions with and and or correctly.",
      requirements: [
        "Approve if age >= 18 and has_insurance is True",
        "Also approve if override_token is True regardless of the others",
        "Else deny"
      ],
      expectedOutput: "Treatment approved",
      hint: "Use parentheses to make the override precedence obvious.",
      errorFeedback:
        "Your logic ignores overrides. Add an or override_token branch that approves immediately."
    },
    3: {
      part: 3,
      roomNumber: 4,
      roomTitle: "The Pharmacy",
      story:
        "A nested check uses the keycard only when clearance is high enough. Otherwise it should not read the card at all.",
      imageUrl: "/images/pharmacy.jpg",
      initialCode: `# Bug: checking keycard even when clearance is low
security_level = 3
has_keycard = True
if has_keycard and security_level >= 5:
    print("Full access granted")
else:
    print("Insufficient clearance")`,
      objective: "Nest the checks to avoid reading a card when clearance is too low.",
      requirements: [
        "Check security level first",
        "Only if high enough, check keycard",
        "Match the expected text"
      ],
      expectedOutput: "Insufficient clearance",
      hint: "Use an inner if once the outer passes.",
      errorFeedback:
        "You evaluated the card before verifying clearance. Wrap the keycard check inside a guard that security_level >= 5."
    }
  },
  5: {
    1: {
      part: 1,
      roomNumber: 5,
      roomTitle: "The Laboratory",
      roomIntro:
        "*Glassware rattles* Night cycles the rigs from 1 to N. Off by one crashes the armatures.",
      story: "Count precisely and print numbers in order.",
      imageUrl: "/images/laboratory.jpg",
      initialCode: `# Bug: prints 0 to 4 instead of 1 to 5
for i in range(5):
    print(i)`,
      objective: "Use range correctly to include both ends when required.",
      requirements: [
        "Print 1 through 5 each on its own line",
        "Do not hardcode five print statements",
        "No extra lines"
      ],
      expectedOutput: "1\n2\n3\n4\n5",
      hint: "range(start, stop_inclusive + 1).",
      errorFeedback:
        "Your sequence starts at 0 or ends at 4. Start at 1 and stop at 6."
    },
    2: {
      part: 2,
      roomNumber: 5,
      roomTitle: "The Laboratory",
      story:
        "Experiments arrive as a list. Print each prefixed with its order starting at 1. Do not use manual counters.",
      imageUrl: "/images/laboratory.jpg",
      initialCode: `# Bug: missing index and format
experiments = ["Test A", "Test B", "Test C"]
for experiment in experiments:
    print(experiment)  # should be '1. Test A' etc`,
      objective: "Iterate with positions starting at 1.",
      requirements: [
        "Use enumerate with a start index of 1",
        "Format as 'k. value'",
        "Print three lines"
      ],
      expectedOutput: "1. Test A\n2. Test B\n3. Test C",
      hint: "enumerate(items, 1) gives 1 based positions.",
      errorFeedback:
        "You printed values without indices or started from 0. Use enumerate with start=1 and format 'k. value'."
    },
    3: {
      part: 3,
      roomNumber: 5,
      roomTitle: "The Laboratory",
      story:
        "Sample labels need a zero padded index like Sample 01, Sample 02. The padding width is 2.",
      imageUrl: "/images/laboratory.jpg",
      initialCode: `# Bug: wrong index base and no padding
samples = ["Blood", "Tissue", "DNA"]
for index, sample in enumerate(samples):
    print(f"Sample {index}: {sample}")`,
      objective: "Use enumerate starting at 1 and zero pad to 2 digits.",
      requirements: [
        "Start at 1",
        "Pad the number to width 2",
        "Match the shown phrasing"
      ],
      expectedOutput: "Sample 01: Blood\nSample 02: Tissue\nSample 03: DNA",
      hint: "Use f'{index:02d}'.",
      errorFeedback:
        "Indexing starts at 0 and there is no padding. Use enumerate(samples, 1) and format {index:02d}."
    }
  },
  6: {
    1: {
      part: 1,
      roomNumber: 6,
      roomTitle: "The Patient Ward",
      roomIntro:
        "*Monitors beep* A countdown must stop on 1. Forgetting to update the counter will hang the ward.",
      story: "Use while with a correct update.",
      imageUrl: "/images/patient-ward.jpg",
      initialCode: `# Bug: loop condition includes 0 and no decrement
count = 5
while count >= 0:
    print(count)
    # missing: count -= 1`,
      objective: "Print 5 down to 1 and stop. Do not print 0.",
      requirements: [
        "Use while",
        "Update the counter correctly",
        "Match the sequence exactly"
      ],
      expectedOutput: "5\n4\n3\n2\n1",
      hint: "Stop when count == 0, so loop while count > 0.",
      errorFeedback:
        "Either you printed 0 or hung the loop. Use while count > 0 and decrement inside."
    },
    2: {
      part: 2,
      roomNumber: 6,
      roomTitle: "The Patient Ward",
      story:
        "Scan the floor numbers to find the first one divisible by 7 that is also odd. Break once found.",
      imageUrl: "/images/patient-ward.jpg",
      initialCode: `# Bug: missing odd check and missing break
number = 1
while number < 100:
    if number % 7 == 0:
        print(f"Found: {number}")
        # add break here
    number = number + 1`,
      objective: "Use break correctly with a compound condition.",
      requirements: [
        "Find the first number divisible by 7 and odd",
        "Print 'Found: 7'",
        "Break immediately"
      ],
      expectedOutput: "Found: 7",
      hint: "7 is divisible by 7 and odd. Check both conditions.",
      errorFeedback:
        "You printed an even multiple or kept scanning. Add number % 2 != 0 and break in the same branch."
    },
    3: {
      part: 3,
      roomNumber: 6,
      roomTitle: "The Patient Ward",
      story:
        "Only print even numbers from 1 to 10, but use continue to skip odds before printing.",
      imageUrl: "/images/patient-ward.jpg",
      initialCode: `# Bug: odds are not skipped
number = 0
while number <= 10:
    number = number + 1
    if number % 2 != 0:
        # should skip to next iteration
        pass
    print(number)`,
      objective: "Use continue correctly so only evens are printed.",
      requirements: [
        "Print 2 4 6 8 10 each on a new line",
        "Do not print odds",
        "No infinite loops"
      ],
      expectedOutput: "2\n4\n6\n8\n10",
      hint: "Use continue inside the odd branch to skip the print.",
      errorFeedback:
        "Odds still print. Replace pass with continue so the print is skipped for odd numbers."
    }
  },
  7: {
    1: {
      part: 1,
      roomNumber: 7,
      roomTitle: "The Operating Theater",
      roomIntro:
        "*Robotic arms twitch* NIGHTINGALE exposes controls through functions. Unused functions do nothing.",
      story: "Define and call a function exactly once.",
      imageUrl: "/images/operating-theater.jpg",
      initialCode: `# Bug: function is never called
def greet():
    print("Hello from the Operating Theater")`,
      objective: "Define and call a function.",
      requirements: [
        "Keep the function as is",
        "Call it exactly once",
        "Print matches expected"
      ],
      expectedOutput: "Hello from the Operating Theater",
      hint: "Add greet() below the definition.",
      errorFeedback:
        "No output means the function was not called. Exactly one call is required."
    },
    2: {
      part: 2,
      roomNumber: 7,
      roomTitle: "The Operating Theater",
      story:
        "Functions with parameters should not rely on globals. Use the parameter inside.",
      imageUrl: "/images/operating-theater.jpg",
      initialCode: `# Bug: uses a global instead of the parameter
name = "Dr. Smith"
def greet_patient(person):
    print(f"Hello, {name}")
greet_patient("Dr. Smith")`,
      objective: "Use function parameters correctly.",
      requirements: [
        "Do not reference the global name",
        "Use the person parameter",
        "Output must match exactly"
      ],
      expectedOutput: "Hello, Dr. Smith",
      hint: "Replace name with person.",
      errorFeedback:
        "Your function ignores its parameter. Use the person argument so other inputs work too."
    },
    3: {
      part: 3,
      roomNumber: 7,
      roomTitle: "The Operating Theater",
      story:
        "Return values allow later composition. Do not print inside when the caller needs the result.",
      imageUrl: "/images/operating-theater.jpg",
      initialCode: `# Bug: printing inside instead of returning
def calculate_dosage(weight, rate):
    dosage = weight * rate
    print(dosage)
result = calculate_dosage(70, 0.5)
print(result)`,
      objective: "Return instead of printing inside the function.",
      requirements: [
        "Use return dosage",
        "Capture the return in result",
        "Final print shows 35.0"
      ],
      expectedOutput: "35.0",
      hint: "Replace print with return.",
      errorFeedback:
        "You either printed twice or got None. Return the value from the function and print only once outside."
    }
  },
  8: {
    1: {
      part: 1,
      roomNumber: 8,
      roomTitle: "The Isolation Chamber",
      roomIntro:
        "*Alarms blink* Defaults help when arguments are missing. The logger must show both calls.",
      story: "Use a default parameter cleanly, not by mutating inputs.",
      imageUrl: "/images/isolation-chamber.jpg",
      initialCode: `# Bug: default not declared in signature
def set_alarm(time=None):
    if time is None:
        time = "08:00"
    print(f"Alarm set for {time}")
set_alarm()
set_alarm("06:30")`,
      objective: "Honor the default via the signature. Do not reimplement it inside.",
      requirements: [
        "Keep default in the function signature",
        "No None checks needed in this scenario",
        "Print both lines exactly"
      ],
      expectedOutput: "Alarm set for 08:00\nAlarm set for 06:30",
      hint: "Put the default into def set_alarm(time=\"08:00\").",
      errorFeedback:
        "You handled defaults manually. Move the default into the signature so set_alarm() works without extra logic."
    },
    2: {
      part: 2,
      roomNumber: 8,
      roomTitle: "The Isolation Chamber",
      story:
        "Stats return multiple values. The BMI formula uses height in meters. The sample uses height 1.70 m and weight 70 kg.",
      imageUrl: "/images/isolation-chamber.jpg",
      initialCode: `# Bug: passing centimeters instead of meters
def get_patient_stats(height_m, weight_kg):
    bmi = weight_kg / (height_m ** 2)
    category = "Normal" if 18.5 <= bmi <= 24.9 else "Check"
    return bmi, category
bmi_value, health_category = get_patient_stats(170, 70)  # 170 cm is wrong unit
print(f"BMI: {bmi_value}, Status: {health_category}")`,
      objective: "Return and unpack multiple values with the correct BMI formula and units.",
      requirements: [
        "Use meters, not centimeters",
        "Return bmi and category",
        "Print both values"
      ],
      expectedOutput: "BMI: 24.221453287197235, Status: Normal",
      hint: "Call with 1.70 for 170 cm.",
      errorFeedback:
        "Your BMI is way off due to units. Convert 170 cm to 1.70 m before calling or adjust inside the function."
    },
    3: {
      part: 3,
      roomNumber: 8,
      roomTitle: "The Isolation Chamber",
      story:
        "Compose helpers to compute a discounted total. The format string must show exactly one dollar sign.",
      imageUrl: "/images/isolation-chamber.jpg",
      initialCode: `# Bug: extra dollar sign in f-string
def calculate_total(price, quantity):
    return price * quantity
def apply_discount(total, discount_percent):
    discount = total * (discount_percent / 100)
    return total - discount
def final_price(price, quantity, discount):
    total = calculate_total(price, quantity)
    final = apply_discount(total, discount)
    return final
result = final_price(100, 3, 10)
print(f"Final price: $${'{'}result{'}'}")`,
      objective: "Chain functions and format money correctly.",
      requirements: [
        "Reuse helpers without duplicating logic",
        "Compute 100 * 3 with 10 percent off",
        "Print exactly: Final price: $270.0"
      ],
      expectedOutput: "Final price: $270.0",
      hint: "A single dollar sign in f-strings needs no escaping.",
      errorFeedback:
        "You printed two dollar signs. Remove the extra $ so the line reads exactly 'Final price: $270.0'."
    }
  },
  9: {
    1: {
      part: 1,
      roomNumber: 9,
      roomTitle: "The Director's Office",
      roomIntro:
        "*Family photo on the desk* Stack pauses. We are close. NIGHTINGALE flags critical cases by exact string match.",
      story:
        "Count only status == 'critical' with the same case. Ignore other statuses.",
      imageUrl: "/images/records-room.jpg",
      initialCode: `# Bug: case mismatch prevents counting
def count_critical_patients(patients):
    count = 0
    for patient in patients:
        if patient['status'] == 'Critical':
            count += 1
    return count
patient_list = [
    {'name': 'John', 'status': 'stable'},
    {'name': 'Jane', 'status': 'critical'},
    {'name': 'Bob', 'status': 'critical'}
]
result = count_critical_patients(patient_list)
print(f"Critical patients: {result}")`,
      objective: "Filter with an exact case sensitive comparison.",
      requirements: [
        "Match 'critical' exactly",
        "Count correctly",
        "Print the result line"
      ],
      expectedOutput: "Critical patients: 2",
      hint: "Do not lowercase everything. Match exact string.",
      errorFeedback:
        "You used 'Critical' but the data says 'critical'. Fix the case so both entries are counted."
    },
    2: {
      part: 2,
      roomNumber: 9,
      roomTitle: "The Director's Office",
      story:
        "Filter numbers by a threshold and transform them in one pass.",
      imageUrl: "/images/records-room.jpg",
      initialCode: `# Bug: condition includes 10, policy says strictly greater than 10
def filter_and_transform(numbers):
    result = []
    for num in numbers:
        if num >= 10:
            result.append(num * 2)
    return result
data = [5, 12, 8, 15, 20]
output = filter_and_transform(data)
print(output)`,
      objective: "Build a new list by filtering and doubling numbers greater than 10.",
      requirements: [
        "Do not include numbers 10 or below",
        "Double values above 10",
        "Return the list"
      ],
      expectedOutput: "[24, 30, 40]",
      hint: "Keep the comparison strict using > 10.",
      errorFeedback:
        "You may have let 10 in or excluded 12 by mistake. Use > 10 and double only those values."
    },
    3: {
      part: 3,
      roomNumber: 9,
      roomTitle: "The Director's Office",
      story:
        "Create all appointments from days and times. The order is days outer, times inner.",
      imageUrl: "/images/records-room.jpg",
      initialCode: `# Bug: inner and outer loops swapped break ordering
def create_schedule(days, time_slots):
    schedule = []
    for time in time_slots:        # swapped
        for day in days:           # swapped
            schedule.append(f"{day} at {time}")
    return schedule
days = ['Monday', 'Tuesday']
times = ['9:00', '14:00']
result = create_schedule(days, times)
for appointment in result:
    print(appointment)`,
      objective: "Generate combinations using nested loops.",
      requirements: [
        "Two nested loops",
        "Append formatted strings",
        "Order as day then time"
      ],
      expectedOutput: "Monday at 9:00\nMonday at 14:00\nTuesday at 9:00\nTuesday at 14:00",
      hint: "Inner loop completes for each outer element.",
      errorFeedback:
        "Your output groups times first. Make day the outer loop and time the inner loop to match the required order."
    }
  },
  10: {
    1: {
      part: 1,
      roomNumber: 10,
      roomTitle: "The Server Room - Final Escape",
      roomIntro:
        "*Fans roar* NIGHTINGALE walls itself behind recursion checks. Base cases must be correct or it spirals.",
      story:
        "Compute factorial with validation that rejects negatives.",
      imageUrl: "/images/server-room.jpg",
      initialCode: `# Bug: no guard for negatives
def factorial(n):
    if n == 0 or n == 1:
        return 1
    return n * factorial(n - 1)
result = factorial(5)
print(f"5! = {result}")`,
      objective: "Add a negative guard and keep correct base cases.",
      requirements: [
        "Raise ValueError if n < 0",
        "Compute factorial for nonnegative n",
        "Print the sample result"
      ],
      expectedOutput: "5! = 120",
      hint: "Check n < 0 at the top and raise.",
      errorFeedback:
        "Missing input validation. Add a guard that raises ValueError for negative n before the base cases."
    },
    2: {
      part: 2,
      roomNumber: 10,
      roomTitle: "The Server Room - Final Escape",
      story:
        "Use a list comprehension to square even numbers that are not multiples of 4.",
      imageUrl: "/images/server-room.jpg",
      initialCode: `# Bug: includes all even numbers, not excluding multiples of 4
numbers = [1,2,3,4,5,6,7,8,9,10]
squares_of_evens = [num ** 2 for num in numbers if num % 2 == 0]
print(squares_of_evens)`,
      objective: "Filter then transform with a compound condition.",
      requirements: [
        "Keep only even numbers that are not divisible by 4",
        "Square the kept numbers",
        "Print the list"
      ],
      expectedOutput: "[4, 36, 100]",
      hint: "Add num % 4 != 0 to the filter.",
      errorFeedback:
        "16 and 64 should not appear. Exclude multiples of 4 with an extra condition."
    },
    3: {
      part: 3,
      roomNumber: 10,
      roomTitle: "The Server Room - Final Escape",
      story:
        "This is the final gate. Parse codes, filter, sum, and apply access logic. Then print a three line report with exact wording. If we pass, NIGHTINGALE releases control.",
      imageUrl: "/images/server-room.jpg",
      initialCode: `# Bug: filter ignores the 'not divisible by 5' rule
def analyze_security_codes(codes):
    valid_codes = [code for code in codes if code > 100]  # missing second condition
    total = 0
    for code in valid_codes:
        total += code
    return len(valid_codes), total

def check_access(count, total):
    if (count >= 3 and total > 500) or total == 777:
        return "ACCESS GRANTED"
    return "ACCESS DENIED"

# Main
security_codes = [50, 150, 200, 75, 300, 125, 252, 222, 228]
valid_count, code_sum = analyze_security_codes(security_codes)
access_status = check_access(valid_count, code_sum)
print(f"Valid codes: {valid_count}")
print(f"Total: {code_sum}")
print(f"Status: {access_status}")`,
      objective: "Combine comprehension, loops, conditionals, and multiple returns.",
      requirements: [
        "Filter codes > 100 and not divisible by 5",
        "Sum valid codes",
        "Grant access if count >= 3 and total > 500, or if total equals the override 777"
      ],
      expectedOutput: "Valid codes: 3\nTotal: 702\nStatus: ACCESS GRANTED",
      hint: "From the list, keep 252, 222, 228. Exclude values divisible by 5.",
      errorFeedback:
        "Your filter included values like 150, 200, 300, or 125. Add the not divisible by 5 condition so the count is 3 and the total is 702."
    }
  }
};