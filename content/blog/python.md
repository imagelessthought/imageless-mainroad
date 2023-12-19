---
title: "Introduction to Python for Non-Computer Science Students"
subtitle: The content in this article was created with assistance from ChatGPT (AI).
layout: single-post
date: 2023-12-14
categories:
  - "Python"
  - "Tutorials"
tags: 
  - "Computer Languages"
postauthor: Michael Baggett
postauthorinfo: Director and Assistant Dean of Information Technology
postauthorarea: College of Visual Arts and Design
postemail: baggett.michael@gmail.com
posturl: https://www.python.org
thumbnail: "img/python-programming-language-icon.svg"
---
Welcome to the world of Python programming! This tutorial is designed for undergraduate students who may not have a background in computer science but want to learn the basics of Python. Python is a versatile and beginner-friendly programming language widely used in various fields, including data science, web development, and automation.
<!--more-->
## Table of Contents

1. **Getting Started**
   - Installing Python
   - Running Python scripts
   - Python IDEs (Integrated Development Environments)

2. **Basic Python Commands and Concepts**
   - Variables and data types
   - Arithmetic operations
   - Strings and string manipulation
   - Lists and tuples
   - Conditional statements (if, elif, else)
   - Loops (for and while)

3. **User-Defined Functions**
   - Defining functions
   - Function arguments and return values
   - Scope of variables
   - Examples of user-defined functions

4. **Regular Expressions**
   - Introduction to regular expressions
   - Using the `re` module
   - Basic regular expression patterns
   - Extracting information from text

5. **Debugging in Python**
   - Common types of errors
   - Using `print` statements for debugging
   - Debugging tools and techniques
   - Handling exceptions

## 1. Getting Started

### Installing Python

Visit [Python's official website](https://www.python.org/downloads/) and download the latest version of Python for your operating system. Follow the installation instructions provided.

### Running Python Scripts

You can run Python scripts in several ways:
- **Command Line:** Open a terminal or command prompt, navigate to the script's directory, and run `python script.py`.
- **Interactive Mode:** Type `python` in the terminal to enter interactive mode.

### Python IDEs

Choose an Integrated Development Environment (IDE) to make coding easier. Examples include [PyCharm](https://www.jetbrains.com/pycharm/), [VSCode](https://code.visualstudio.com/), and [Jupyter Notebooks](https://jupyter.org/).

## 2. Basic Python Commands and Concepts

### Variables and Data Types

```python
# Variables
x = 5
y = "Hello, Python!"

# Data Types
integer = 10
floating_point = 3.14
string = "Python"
boolean = True
```

### Arithmetic Operations

```python
# Arithmetic
sum_result = 5 + 3
difference = 7 - 2
product = 4 * 6
quotient = 10 / 2
```

### Strings and String Manipulation

```python
# Strings
message = "Hello, World!"

# String Manipulation
concatenation = "Hello" + " " + "World"
length = len(message)
substring = message[0:5]
```

### Lists and Tuples

```python
# Lists
fruits = ["apple", "banana", "orange"]
fruits.append("grape")

# Tuples
coordinates = (3, 4)
```

### Conditional Statements

```python
# If statement
x = 10
if x > 5:
    print("x is greater than 5")
elif x == 5:
    print("x is equal to 5")
else:
    print("x is less than 5")
```

### Loops

```python
# For loop
for i in range(5):
    print(i)

# While loop
counter = 0
while counter < 5:
    print(counter)
    counter += 1
```

## 3. User-Defined Functions

### Defining Functions

```python
def greet(name):
    return "Hello, " + name + "!"

result = greet("Alice")
print(result)
```

### Function Arguments and Return Values

```python
def add_numbers(x, y):
    return x + y

sum_result = add_numbers(3, 7)
print(sum_result)
```

### Scope of Variables

```python
global_variable = 10

def print_variable():
    local_variable = 5
    print(global_variable)  # Access global variable
    print(local_variable)   # Access local variable

print_variable()
```

### Examples of User-Defined Functions

```python
# Function to check if a number is even
def is_even(number):
    return number % 2 == 0

# Function to calculate the square of a number
def square(number):
    return number ** 2

# Example usage
print(is_even(4))
print(square(3))
```

## 4. Regular Expressions

### Introduction to Regular Expressions

Regular expressions (regex) are patterns used for string matching and manipulation.

### Using the `re` Module

```python
import re

# Matching a pattern
pattern = r"\d+"  # Matches one or more digits
text = "There are 123 apples."
result = re.search(pattern, text)
print(result.group())
```

### Basic Regular Expression Patterns

- `\d`: Matches any digit
- `\w`: Matches any alphanumeric character
- `.`: Matches any character except a newline

### Extracting Information from Text

```python
# Extracting email addresses from text
text = "Contact us at john@example.com or alice@gmail.com"
email_pattern = r"\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b"
emails = re.findall(email_pattern, text)
print(emails)
```

## 5. Debugging in Python

### Common Types of Errors

1. SyntaxError: Mistakes in syntax.
2. NameError: Trying to use an undefined variable.
3. TypeError: Performing an operation on incompatible data types.

### Using `print` Statements for Debugging

```python
# Debugging with print statements
x = 5
print("Value of x:", x)
```

### Debugging Tools and Techniques

- **Debugger:** Use a debugger to step through code and inspect variables.
- **Logging:** Use the `logging` module to log messages during execution.
- **Try-Except Blocks:** Use `try` and `except` to handle exceptions gracefully.

### Handling Exceptions

```python
# Handling exceptions
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero.")
```

## Cheat Sheet

| Command/Concept          | Example                                |
|---------------------------|----------------------------------------|
| Variables                 | `x = 5`                                |
| Data Types                | `string = "Python"`                    |
| Arithmetic Operations     | `sum_result = 5 + 3`                   |
| Strings                   | `message = "Hello, World!"`            |
| Lists                     | `fruits = ["apple", "banana"]`         |
| Tuples                    | `coordinates = (3, 4)`                 |
| Conditional Statements    | `if x > 5:`                            |
| Loops                     | `for i in range(5):`                   |
| Functions                 | `def greet(name): return "Hello, " + name + "!"` |
| Regular Expressions       | `import re`                            |
| Debugging with `print`    | `print("Value of x:", x)`              |
| Exception Handling        | `

try: result = 10 / 0 except ZeroDivisionError: print("Cannot divide by zero.")` |

Feel free to experiment with these examples and use the cheat sheet as a quick reference while exploring the world of Python programming. Happy coding!