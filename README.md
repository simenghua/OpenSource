# 2048Game
Copyright (c) 2016 Simeng Hua    

demo: http://web.cecs.pdx.edu/~shua/project/main_mode1.html

What is 2048?  
-   
The 2048 game is a simple single-user math game, which consists of a board of 4x4 tiles as its
game space. Each tile may be labeled with a number, which is the power of two. On the initial broad of this game only two tiles marked with number 2 will show. Users can use arrow keys to slide these numbered tiles. When two tiles with same number meet, they will be combined into one tile. The number on the newly generated tile will be the summation of those two numbers. Game will be end once all tiles are marked with numbers or the greatest number shows on all numbered tiles reaches 2048. This project will create an advanced version of the 2048 game, which has two playing modes: the classic timed mode and the endless mode. The highest score of each play will be recorded and generated as a leaderboard on a leaderboard page.

How to Play?  
-    
"2", "0", "4" and "8" serve as not only the logo of the game, but also buttons that lead the users to further pages. If the user move the mouse to the region of any number, the number will turn into a simple description of the further page. If the user then click the number, they will go to the corresponding page. In that page, the user can then click "Back to menu" to return to the main page.

- "2":  If "2" is clicked, the detailed rules and instructions of the game will be displayed.   

- "0":  If "0" is clicked, the user can see a trophy that can be clicked. Then a ranking of scores that have been achieved by all users who have played the game will be displayed.    

- "4": If "4" is clicked, the user will be led to "Adventure Mode", where they only play in a certain amount of time while trying to get as higher score as possible.     

- "8": If "8" is clicked, the user will be led to  "Classic Mode", where they can play until all the cells are occupied. There will be no time limit. Once "2048" is formed in any cell, the user wins the game. 
   
   
Language  
-     
- Javascript    
- HTML/CSS

Current Features    
-  
- Homepage
- Instruction page
- Leaderboard page  
- Classic mode
- Adventure mode   
 

Future Plans   
-    
- In current version, there are several HTML files that are used for different modes, instructions and leader board. We want to eventually combine them into one single HTML file, while keeping the current functions.

- This game is now web based. We also want to start from here and implement an Android application out of it.

- We also plan to add a "Challenge your friend" mode, so that two players can play online the same time on the same page. They will each have a board and see each other's move. In certain amount of time, whoever gets a higher score wins the competition. 
    

Contact Information    
-
shua@pdx.edu
       
       
This code is available under the "MIT License". Please see the file COPYING in this distribution for license terms.
