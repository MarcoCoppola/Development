# Terminal Commands

1. Commons
1. [GIT](#git)
1. [Nginx](#nginx)
---

## CORE COMMANDS

| Key/Command | Description |
| ----------- | ----------- |
| cd |  Home directory |
| cd [folder] | Change directory e.g. `cd documents` |
| cd /  | Root of drive |
| cd -  | Previous directory |
| chown [user]: [folder]  | Change owner of folder |
| chown -R [user]: [folder]  | Change owner of folder and apply the rights for all files inside of a directory too|
| ls | Short listing |
| ls -l | Long listing |
| ls -a | Listing incl. hidden files |
| ls -lh| Long listing with Human readable file sizes |
| ls -R | Entire content of folder recursively |
| sudo [command] | Run command with the security privileges of the superuser (Super User DO) |
| open [file] | Opens a file ( as if you double clicked it ) |
| top | Displays active processes. Press q to quit |
| nano [file] | Opens the file using the nano editor |
| vim [file] | Opens the file using the vim editor |
| clear |  Clear screen |
| reset |  Resets the terminal display |

## CHAINING COMMANDS

| Key/Command | Description |
| ----------- | ----------- |
| [command-a]; [command-b] | Run command A and then B, regardless of success of A |
| [command-a] && [command-b] | Run command B if A succeeded |
| [command-a] || [command-b] | Run command B if A failed |
| [command-a] & | Run command A in background |

## FILE MANAGEMENT

| Key/Command | Description |
| ----------- | ----------- |
| touch [file] |   Create new file |
| pwd | Full path to working directory |
| . |  Current folder, e.g. `ls .` |
| .. | Parent/enclosing directory, e.g. `ls ..` |
| `ls -l ..` | Long listing of parent directory |
| `cd ../../` | Move 2 levels up |
| cat | Concatenate to screen |
| rm [file] |  Remove a file, e.g. `rm data.tmp` |
| rm -i [file] | Remove with confirmation |
| rm -r [dir] | Remove a directory and contents |
| rm -f [file] | Force removal without confirmation |
| cp [file] [newfile] | Copy file to file |
| cp [file] [dir] | Copy file to directory |
| mv [file] [new filename] |  Move/Rename, e.g. `mv file1.ad /tmp` |
| pbcopy < [file] | Copies file contents to clipboard |
| pbpaste | Paste clipboard contents |
| pbpaste > [file] | Past clipboard contents into file, `pbpaste > paste-test.txt` |

---

## GIT

| Key/Command | Description |
| ----------- | ----------- |
| git branch | Restituisce l'elenco dei branch |
| git branch new-branch |   Creazione di un nuovo branch |
| git branch -d test_branch | Cancellazione del branch 'test_branch'. Safe operation |
| git branch -m test_branch | Rinonima il branch corrente in test_branch |
| git checkout test_branch | Definisci quale deve essere il brach attivo |

---

## Nginx

| Key/Command | Description |
| ----------- | ----------- |
| service nginx start | Start Nginx |
| service nginx stop | Stop Nginx |
| service nginx restart | Restart Nginx |
| service nginx reload | Reload Nginx |
| nginx -t | Check Nginx Configuration |
| service nginx status | Check if Nginx is Running |
| nginx -V | Check Nginx Version & Compiled Modules |
