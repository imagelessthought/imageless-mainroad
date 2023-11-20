---
title: Migrating from Isilon to Pure Storage
date: 2023-08-12
nosearch: "True"
postauthor: Michael Baggett
postauthorinfo: Director and Assistant Dean of Information Technology
postauthorarea: College of Visual Arts and Design
postemail: michael.baggett@unt.edu
posturl: https://itservices.cvad.unt.edu
thumbnail: "img/server-icon.svg"
layout: single-posts
exclude_from_recent: true
---
[Pure Storage](https://www.purestorage.com/ 'Pure Storage Website') is the new file storage solution the UNT System is migrating to. Below are our notes on setting the proper file permissions on the new shares and migrating the files to the new server.
<!--more-->
* Before beginning you should join the [Enterprise File Storage Miscrosoft Team Channel](https://teams.microsoft.com/l/team/19%3aPmbpLzaMB6VaFUEPmtsxrNp72l38lslCfAd7fyt3exs1%40thread.tacv2/conversations?groupId=b9bb37ff-1804-40cf-b6e5-edd54f28d273&tenantId=70de1992-07c6-480f-a318-a1afcba03983 'Enterprise File Storage Miscrosoft Team Channel') for the latest updates.

## Share Permissions ##
The Share permissions must be set to allow your logged on users to connect to your file share. Share permissions do not grant logged on users access to the folders and\or files on your file share: that is done through NTFS permssions. 

You can set the Share Permission as: **Full Control**, **Change**, or **Read**.

* **Full Control** — Users can do everything allowed by the “Read” and “Change” permissions, and they can also change permissions for NTFS files and folders only. By default, the “Administrators” group is granted “Full Control” permission.

* **Change** — Users can do everything allowed by the “Read” permission, as well as add files and subfolders, change data in files, and delete subfolders and files. This permission is not assigned by default.

* **Read** — Users can view file and subfolder names, read data in files, and run programs. By default, the “Everyone” group is assigned “Read” permissions.
You will want to grant Full Control permissions to your administrator security group and the group should contain anyone who will be managing the file share.

> For standard users, a common practice is to grant Change permissions to a security group that contains all of your users (example: Everyone or Domain Users).
{: .prompt-tip}

If a user has been granted permssions on the share but not granted permssions to files and folders through NTFS permssions, they will see an empty folder when they connect to the share.

## File Permissions ##
Below are some common scenarios, with the information on how to set the permissions using the Windows command-line tool: icacls.

## HOME and SHARED Folders ##
**HOME** and **SHARED** folders should only contain other folders at their root and not files themselves. Each of the child folders may have different permssions and would only be visible to users who have been granted at least read NTFS permssions. You will want users to be able to see and access the HOME or SHARED folder but not make any changes at the root of the folder: you don't want a user to be able to delete the folder or write or delete any of the contents in the root.

You can grant the Everyone security group (or any security group that contains all of the users who will need access to the folder) read-only permssions to the HOME and SHARED folders ("This folder only"). This will allow them to see and access the folder but not even see the child folders unless they have been granted permissions to a child folder. They will not see any child folders they have not been granted permssion to.

If you want to replace the current persmssions on the folder, ad the :r option. If you are scripting the permissions assignments, I suggest using :r on the first command as shown below just to ensure any permssions you may have set duing testing are removed.
```
icacls foldername /grant :r UNT\Everyone:(RX)
```
If you are adding additional permissions to a folder, and do not want to remove existing permissions, you would use the same command but not include the :r option.
```
icacls foldername /grant UNT\AnotherGroup:(RX)
```
### HOME and SHARED Child Folders ### 
For the child folders, you will want to protect those from modification and accidental deletion or moves at their root.

Each user gets their own folder under the HOME folder. You don't want them to be able to delete or modify their personal home folder but they do need to be able to write and modify the contents in the root of their HOME folder and in all subfolders. Common practice at UNT is to use the user's EUID for their HOME folder name.

The child folders under the SHARED folder are very similar: You don't want users to be able to delete or modify the child folder itself but they do need to be able to write and modify the contents in the root of the folder and in all subfolders.

### HOME Child Folders ###
This command grants modify writes to the user for the contents of the user's HOME folder at the root level but not the write to delete or modify the folder itself ("This folder only"):
```
icacls "EUID" /grant "UNT\EUID":(RX,W)
```
This command grants the user modify permssions to the rest of the folder, everything under the root fo their HOME folder ("This subfolder and files only")"
```
icacls "EUID" /grant "UNT\EUID":(OI)(CI)(IO)(M)
```
### Shared Child Folders ###
For the purposes of this documentation we will assume the child SHARED folders are departments.

This command grants modify writes to a security group for the contents of the department's SHARED folder at the root level but not the write to delete or modify the folder itself ("This folder only"):
```
icacls "department folder name" /grant "UNT\department security group":(RX,W)
```
This command grants the user modify permssions to the rest of the folder, everything under the root fo their HOME folder ("This subfolder and files only")"
```
icacls "department folder name" /grant "UNT\department security group":(OI)(CI)(IO)(M)
```
When testing, be aware that it can take a while for the permissions to fully propagate for the users. I have learned to wait about an hour before testing. Then completely restart your testing computer (don't just logout) before logging in with your test account. You may set permssions on a group of folders at the same time, but that does not mean the permissions will become active at the same time. Give it an hour.

## File Migration ##
We will be using the Microsoft tool Robocopy to migrate the file. There are other tools available, use what you are comfortable with, but this works.

This is the robocopy command that AITS used in their testing, it is also what I used for testing and it worked well and provides a log file.
```
robocopy {source} {destination} /ZB /MT:32 /R:0 /W:0 /MIR /COPY:DATO /DCOPY:T /NDL /NFL /NP /TEE /LOG:{log file name and path}
```
This is the robocopy command that Michael Heredia included in his Utilizing Robocopy to Migrate Shares from Hammerspace to PureStorage document that was shared with the migration team.
```
robocopy {source} {destination} /E /dCOPY:DAT /COPY:DATSO /SECFIX /TEE /r:3 /w:5 /MT:64
```
You may want to append the option to create a log file to the one above:
```
robocopy {source} {destination} /E /dCOPY:DAT /COPY:DATSO /SECFIX /TEE /r:3 /w:5 /MT:64 /LOG:{log file name and path}
```
If the command has no errors, the output should be something along the lines of what is shown below:

> -------------------------------------------------------------------------------
> ROBOCOPY :: Robust File Copy for Windows
> -------------------------------------------------------------------------------
> Started : Friday, August 4, 2023 11:30:04 AM
> Source : {source}
> Dest : {destination}
>
> Files : *.*
> 
> Options : *.* /NDL /NFL /TEE /S /E /DCOPY:T /COPY:DATO /PURGE /MIR /ZB /NP /MT:32 /R:0 /W:0
> 
>------------------------------------------------------------------------------

Below this you will see a list of any errors that occur during the copy, if using the AITS command. If you are using the Heredia version you will see everything: successes and failures.

When the copy completes you will get a summary regardless of which command you used. Example below:

|         |Total     |Copied     |Skipped |Mismatch |FAILED   |Extras   |
| Dirs  : |101037    |101037     | 1      | 0       | 0       | 0       |
| Files : |206264    |206249     | 0      | 0       | 15      | 0       |
| Bytes : |450.136g  |405.619g   | 0      | 0       | 44.517g | 0       |
| Times : |84:32:19  |3:05:16    |        |         | 0:00:00 | 0:07:18 |

In the summary, you will notice some files have failed to copy. That sometimes happens when you are copying a large number of files. You will need to copy those separately. You can use the outputed log files to make sure you get everything. In the example above, only .01% of the files failed to copy.

## Common Error Messages ##
Below are the errors you may get for files that fail to copy:

* The request could not be performed because of an I/O device error. ERROR: RETRY LIMIT EXCEEDED.
* An unexpected network error occurred. ERROR: RETRY LIMIT EXCEEDED.

## Other Error Messages ##

* 2023/08/04 09:22:54 ERROR 1307 (0x0000051B) Copying Directory ?:\ This security ID may not be assigned as the owner of this object. ERROR: RETRY LIMIT EXCEEDED.

If you get the error shown above you need to contact the UNT Server Team to add permissions to your account: <a href="mailto:servers@untsystem.edu?subject=File Storage Migration">servers@untsystem.edu</a>.

* The specified network name is no longer available

If you get the error error shown above, Chris Stoermer found this article, which provides possible fixes: <a href="https://backupchain.com/i/how-to-fix-error-64-the-specified-network-name-is-no-longer-available" alt="BackupChain Error">BackupChain</a>.