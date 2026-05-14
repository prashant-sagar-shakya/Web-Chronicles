# Advanced Terminal Commands: Complete Learning Guide

This guide is organized to take you from basic file viewing to advanced data processing and automation.

---

## Phase 1: Navigation & Listing

- `ls -l`: Long listing (size, date, permissions).
- `ls -la`: Long listing including **hidden** files.
- `ls -lt`: Long listing sorted by **time** (newest first).
- `ls -lr`: Long listing in **reverse** alphabetical order.
- `ls -lra`: Long listing, reverse order, including hidden files.
- `ls -s`: Shows the size of each file in blocks.
- `ls -lR newdir/subdir`: Recursive listing of a specific folder.
- `ls Zoo*`: Using **Wildcards** to find all files starting with "Zoo".
- `ls ..`: List files in the **parent** directory.

---

## Phase 2: Creating & Viewing Files

### cat (Concatenate & View)
- `cat filename.txt`: Display the entire content of a file.
- `cat > newfile.txt`: Create a new file and start typing. 
    - **To Save:** Press `Enter` then `Ctrl + D`.
- `cat >> newfile.txt`: Append text to the end of an existing file.
- `cat file1 file2 > merged.txt`: Combine two files into one.

### Quick File/Folder Creation
- `touch file.txt`: Create a new empty file.
- `mkdir test && cd test`: Create a folder and enter it immediately using `&&`.
- `mkdir -p frontend/src`: Create a nested directory structure in one go (**Recursive**).
- `echo "Hello World"`: Print text to the terminal.

---

## Phase 3: Permissions & Security (chmod)

### Viewing Permissions
- View permissions using `ls -l`. They look like `drwxrwxrwx`.
- **u** = User | **g** = Group | **o** = Others
- **r** = Read | **w** = Write | **x** = Execute

### Numeric Method (The 4-2-1 Rule)
- **4** = Read | **2** = Write | **1** = Execute
- **7** (4+2+1) = Full Permissions (rwx)
- **6** (4+2) = Read & Write (rw-)
- **Example:** `chmod 777 file`: Everyone can do everything.
- **Example:** `chmod 664 file`: User/Group can Read/Write; Others can only Read.

---

## Phase 4: Text Analysis (head, tail, grep)

### head & tail
- `head -20 file.txt`: See the first 20 lines.
- `tail -n +25 file.txt | head -n 5`: Start at line 25 and show the next 5 lines.

### Power Searching with grep
- `grep "ERROR" log.txt`: Finds lines with "ERROR".
- `grep -v "INFO" log.txt`: **Inverts** search—shows lines that **do NOT** contain "INFO".
- `grep -A 5 "ERROR" log.txt`: Shows 5 lines **After** the match.
- `grep -B 5 "ERROR" log.txt`: Shows 5 lines **Before** the match.
- `grep -C 5 "ERROR" log.txt`: Shows 5 lines of **Context** (both before and after).
- `grep -hin "one" file`: **h** (hide filename), **i** (ignore case), **n** (show line number).

---

## Phase 5: Stream Editor (sed)

`sed` is used for transforming and editing text in a stream (without opening the file).

### Basic Substitution
- `sed 's/ERROR/CRITICAL/' log.txt`: Replaces the first "ERROR" with "CRITICAL" on each line.
- `sed -ibackup 's/ERROR/CRITICAL/' log.txt`: Edits the file **In-place** and creates a "log.txtbackup" file.

### Selective Editing
- `sed '3 s/ERROR/CRITICAL/' log.txt`: Replaces only on **line 3**.
- `sed '3,5 s/ERROR/CRITICAL/' log.txt`: Replaces on **lines 3 to 5**.
- `sed -n '3,5 p' log.txt`: Prints **only** lines 3 to 5.
- `sed -n '/ERROR/ p' log.txt`: Prints only the lines that match "ERROR".

---

## Phase 6: Data Processing (awk)

`awk` is a powerful tool for processing data in columns/fields.

### Basic Syntax: `awk 'pattern {action}' file`
- `awk '/ERROR/ {print $0}' log.txt`: Prints the entire line (`$0`) if it contains "ERROR".
- `awk '{print $1, $2}' log.txt`: Prints only the **first and second columns**.

### Delimiters (Field Separators)
By default, `awk` uses **whitespace** (spaces or tabs) as the delimiter to separate columns.

- **Input Field Separator (-F):** Use this to tell `awk` what character separates your data.
    - `awk -F "," '{print $1}' log.txt`: Use a **comma** as the separator.
    - `awk -F ":" '{print $1}' /etc/passwd`: Use a **colon** as the separator.
    - `awk -F "|" '{print $1}' data.csv`: Use a **pipe** as the separator.
- **Internal FS Variable:** You can also set it inside the command:
    - `awk 'BEGIN {FS=","} {print $1}' log.txt`
- **Output Field Separator (OFS):** This defines what character is placed between columns in the output.
    - `awk 'BEGIN {OFS=" ==> "} {print $1, $2}' log.txt`: Will print columns separated by " ==> ".

### Advanced awk
- **Substitution:** `awk '{gsub(/ERROR/, "CRITICAL")}{print}' log.txt`: Replaces all "ERROR" with "CRITICAL" and prints.
- **Report Generation:** 
  ```bash
  awk 'BEGIN {print "LOG SUMMARY\n---"} {print} END {print "DONE"}' log.txt
  ```
- **Conditional Printing:** `awk '{if ($1 > 1598863888) {print $0}}' log.txt`: Only prints lines where the first column is greater than that number.
- **Counting:** `awk '{count[$2]++} END {print count["ERROR"]}' log.txt`: Counts how many times "ERROR" appears in the second column.

---

## Phase 7: Automation

### Bash Scripting (newscript.sh)
```bash
#!/bin/bash
# Shebang: Tells OS to use Bash

echo "Hello World"
mkdir automated_dir2
cd automated_dir2 && touch newscript_file.txt
```
- **Run:** `bash newscript.sh`
- **Verify:** `ls -lt automated_dir2`

---

# Hinglish Summary

1. **ls -lR**: Saare sub-folders ki list ke liye.
2. **grep -v**: Ulta search (wo dikhao jo word file mein nahi hai).
3. **grep -A/B/C**: Match ke aage, peeche, ya dono taraf ki lines dekhne ke liye.
4. **sed**: File ke andar text replace karne ke liye (bin file khole).
    - `sed '3,5 p'`: Sirf line 3 se 5 dekhne ke liye.
5. **awk**: Columns ke saath khelne ke liye (print $1, $2).
    - `-F`: Delimiter (separator) set karne ke liye (jaise comma ya colon).
    - `OFS`: Output mein columns ke beech kya aayega, wo set karne ke liye.
6. **Pipe (|)**: Do commands ko jodne ke liye.
7. **#!/bin/bash**: Scripting ki shuruat.
