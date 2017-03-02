# I Bidoni's Project in System Design
The Project Repo for System Design

##Food Ordering system

Only for handling food, not **Drinks**.

Written in `Javascript`, `HTML` and `CSS`.


##App Description
The app contains 4 different workstations.
###1. Start Page
- Here you're able to chose which "workstation" you want to use the app with (**Kitchen, Reception, Bar, Waitor**(not implemented yet). When you press one of the buttons you're redirected to that particular workstation.
- You can write who's responsible for the pub that evening. This will be visible for everyone using the system.
- You can write "comments" in the bigger box stating certain things. (i.e We're out of fries).

###2. Kitchen
- Here you can see all orders that the bar has sent. Yellow means not claimed, red means claimed.
- By pressing the order 1 time it will change status to claimed. Press one more time and it's back to unclaimed.
- By pressing the **Done** button, that particular order are removed from the system.(and shall be delivered to the customer).

###3. Reception
- Here you're able to see how occupied the restaurant are, and maybe deny customers entrance if it's on the red box.


###4. Bar
- Here you create orders. When you press a particular dish you're prompted with some options(chosing amount, preferations). When you're done with the order you simply press the **Send Order**-button which prompts you with chosing of table number.
- By pressing the **Order Queue** button you're able to see which orders that are claimed and not(red or yellow). If they aren't claimed yet you can remove them from the queue by pressing the **Remove** button. ***How occupied is the restaurant?*** is used to inform the Reception about how crowded the pub is, the more to the left/*Green*, the less crowed.  
