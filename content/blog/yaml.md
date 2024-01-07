---
title: "Introduction to YAML for Non-Computer Science Students"
subtitle: The content in this article was created with assistance from ChatGPT (AI).
layout: single-post
date: 2023-12-14
categories:
  - "YAML"
  - "Tutorials"
tags: 
  - "Markup Languages"
postauthor: Michael Baggett
postauthorinfo: Director and Assistant Dean of Information Technology
postauthorarea: College of Visual Arts and Design
postemail: baggett.michael@gmail.com
posturl: https://www.python.org
thumbnail: "/mbaggett/int/img/images/yaml-icon.svg"
---
YAML, short for "YAML Ain't Markup Language" or sometimes "Yet Another Markup Language," is a human-readable data serialization format. It is often used for configuration files and data exchange between languages with different data structures. YAML files use indentation and colons to denote structure, making them easy to read and write.
<!--more-->
**History and Development:**

YAML was first proposed by Clark Evans in 2001, with the goal of creating a more human-readable data serialization format than XML or JSON. It aimed to be simple to write and easy to parse. YAML's development has been collaborative, involving the input of various contributors, and it has evolved to become a popular choice for configuration in many software applications.

**Initial Purpose and Evolution:**

YAML was initially created for configuration files in software projects. Its simplicity and readability made it a favorable choice, especially when compared to more complex alternatives. Over time, YAML's use expanded beyond configuration files to data exchange between languages, making it a versatile choice for various applications.

**Common Usages of YAML:**

1. **Configuration Files:** YAML is frequently used to define configurations for applications, services, and infrastructure tools.

2. **Data Serialization:** It is used for serializing data structures, making it easy to exchange information between languages with different data models.

3. **Automation Scripts:** YAML is commonly used in automation tools, such as Ansible, for defining tasks and workflows.

**Introduction to Coding with YAML:**

Let's create a basic YAML file and explore some commonly used structures:

```yaml
# Basic YAML Example
name: John Doe
age: 30
is_student: false
grades:
  - subject: Math
    score: 90
  - subject: English
    score: 85
```

- **Key-Value Pairs:** `key: value` pairs define properties. In the example, `name`, `age`, and `is_student` are key-value pairs.

- **Lists:** Lists are denoted by a hyphen `-` and are used to represent arrays. In the example, the `grades` key has a list of subjects and scores.

- **Nested Structures:** YAML supports nested structures. The `grades` list contains nested key-value pairs for each subject.

**Common Commands and Functions:**

1. **Scalar Types:**
   - Strings: `name: John Doe`
   - Numbers: `age: 30`
   - Booleans: `is_student: false`

2. **Lists:**
   ```yaml
   grades:
     - Math
     - English
   ```

3. **Nested Structures:**
   ```yaml
   student:
     info:
       name: John Doe
       age: 30
     grades:
       - subject: Math
         score: 90
       - subject: English
         score: 85
   ```

4. **Comments:** Use `#` for comments.
   ```yaml
   # This is a comment
   name: John Doe
   ```

**YAML Cheat Sheet:**

```yaml
# YAML Cheat Sheet
name: John Doe
age: 30
is_student: false
grades:
  - subject: Math
    score: 90
  - subject: English
    score: 85
```

**Top 5 Resources for Learning YAML:**

1. [YAML Official Specification](https://yaml.org/): The official YAML website provides the complete YAML specification.

2. [Learn YAML in Y Minutes](https://learnxinyminutes.com/docs/yaml/): A quick reference guide to learn YAML basics.

3. [YAML Tutorial on Tutorialspoint](https://www.tutorialspoint.com/yaml/index.htm): Comprehensive tutorial covering YAML concepts and examples.

4. [YAML Syntax Guide on GeeksforGeeks](https://www.geeksforgeeks.org/yaml-yet-another-markup-language-data-serialization-format/): Explains YAML syntax with examples.

5. [Ansible Documentation](https://docs.ansible.com/ansible/latest/reference_appendices/YAMLSyntax.html): Ansible, a popular automation tool, extensively uses YAML. The documentation provides practical examples of YAML usage.