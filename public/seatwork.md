# Seatwork #2 - Getting to know CSS Position and z-index.
### This seatwork will ask you to implement the different CSS position on a given code.
### short link to this .md file is: https://bit.ly/4c61P9K
#### Resources (also found in Khub week 5)
- [4 Minute Youtube Video on CSS Position](https://www.youtube.com/watch?v=YEmdHbQBCSQ)
- [CSS Position Tutorial](https://roycan.github.io/CssPositioningZIndexLab/)

### Instructions: 
1. This is individual submission in khub, but you can work with a partner.  When you submit in khub please place both your names in the submission bin.
2. Guided Activity (30 minutes), please follow what is being required.  

    - Make a copy of this .md file to your Q4 repository and name it as **SectionLNseatwork2.md** example **9LiCruzSeatwork2.md**. Place it in your q4 repository vscode local computer. Committing frequently to your Github repository.  
    - Copy the code below and paste it inside a new file (name it as SectionLNseatwork2.html). Place this file in the same location where the .md file is saved. 
    - Change the content values of the meta tags to your names for author/s and the date today for revised.
    - Please do the following tasks that will ask you to reposition HTML elements then answer the guided question for each task on the .md file. Commit changes to the .md file and to the .html file as well.
    **- This seatwork is worth 20pts and should be submitted by the end of the period** The link to [KHub submission bin](https://khub.mc.pshs.edu.ph/mod/assign/view.php?id=15481).
      - Submit the links to your .md file and .html file.


### Step 1 (Static vs Relative):

- Add in css ```position: relative; top: 20px; left: 20px;``` to .sidebar.

- Guided Question: What changed compared to the default static positioning? Try to give different values to top and left or you can change it to bottom, right.
<br><br>
In comparison to the static positioning, the relative positioning gave way for the element
to move from its original position. By giving top and left values, it made somewhat of a margin 
to the element, moving it without changing the position of the other elements.
### Step 2 (Fixed):

- Add in css ```position: fixed; bottom: 0; width: 100%;``` to .footer.

- Guided Question: What happens when you scroll the page? Why does the footer behave differently from position relative?
<br><br>
When you scroll the page, the footer has a fixed position, staying at the bottom of your screen. 
Since the footer has a fixed position, it behaves differently from the relative, and instead of movinng
with the page, it stays in place. 

### Step 3 (Absolute):

- Add in css ```position: absolute; top: 66px; left: 200px;``` to .content.

- Guided Question: What is the effect of position: absolute on an element? How is it different from fixed?
<br><br>
Position absolute moves relative to a parent element, while position fixed stays locked to the viewport.
### Step 4 : (Absolute)

- Add in html ```<div class="notice">Notice!</div>``` and include the css below:

```css
.notice {
    position: absolute;
    top: 60px;
    left: 400px;
    background: orange;
    padding: 10px;
    z-index: 2;
}
```

- Give .content a z-index: 1.

- Guided Question: Why does the notice appear on top of the content? What happens if you swap the z‑index values?
It could be that these elements follow a layering system, and it is indicated by the z-index which element goes on which layer. When the z-index is a bigger value, the element is placed on top of elements with lower z-index values.

- Challenge: 
    * What changes that you have to do on the code that will position .notice box on the top right corner of the .content box? Please write the code on paper as well (both html and css on the part of .notice and .content).
    * Try to change the position of .content to relative then to fixed. What do you observed each time?
    * What do you observe on about the effect of z-index on .notice and .content boxes?

3. Please answer the following reflection questions (15 minutes)

    a. Could you summarize the differences between the CSS position values (static, relative, absolute, fixed)? 
    Static follows the normal flow of the page, so using "top, left, bottom, right" does not work on it. Relative, despite following the normal flow, is affected by "top, left, bottom, right", so it changes accordingly. Absolute is positioned relative to the nearest parent element, while fixed makes itself relative to the viewport, so it stays in place even when scrolling. 

    b. How does absolute positioning depend on its parent element?
    The element with this positioning looks for the nearest ancestor that is not "static-positioned" and makes itself relative to that, otherwise, it makes itself relative to the viewport. 

    c. How do you differentiate sticky from fixed (you can research on sticky)?
    A sticky positioned element becomes fixed when you scroll past a certain point, while a fixed element does not move at all.

    d. If you were designing a webpage for a school event, how might you use positioning to highlight important information? Please give concrete examples.
    If I were to make a school event webpage, I would start by making a navigation bar as a top menu *which has home, schedule, registration, etc.* using a fixed positioning, which can allow them to navigate without having to scroll all the way back up. After this, I would use the sticky positioning to titles regarding information about the event, examples being the guest speaker or the event schedule names, so that they can be easy to follow and stay visible while scrolling. After that, I would make an absolute "registration deadline" button, and a fixed "register now" button, so users can quickly sign up. Lastly, I would use relative for any other element to layout it properly, making sure that the important information is distinguishable and highlighted.