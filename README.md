************************************************** ANS TO THE QUS NO: 01 ******************************************************

The differences between getElementById, getElementsByClassName, and querySelector / querySelectorAll are given below :

getElementById: It finds a single element by the specific ID. It always returns one element.

getElementsByClassName: It finds all elements with the same class name. It returns as a HTMLCollection.

querySelector: It selects only the first element that matches with the specific id,class,tag ,etc .

querySelectorAll: It selects all elements that matches with the specific id,class,tag ,etc. it returns as a Nodelist.




************************************************** ANS TO THE QUS NO: 02 ******************************************************

How do I create and insert a new element into the DOM: 
1. At first, I use document.createElement() to create an element.
2. Then add innertext.
3. After that, append the newly created child or element to the parent.

For Example : const DivBoxNew = document.createElement("div");
              DivBoxNew.innerText = " I am Nure Anha Tamanna ";
              document.body.appendChild(DivBoxNew);





************************************************** ANS TO THE QUS NO: 03 ******************************************************

Event Bubbling and how it works: Event Bubbling is actually when an event occurs on an element, such as a button. It first works on
that element (button) then moves upward to its parent and parents upward untill reaches the root document.






************************************************** ANS TO THE QUS NO: 04 ******************************************************

Event Delegation in JavaScript and Why it is useful: 

Event Delegation is where we can attach an eventListener to a parent instead of attaching in every single child.

It is very useful cause it needs less memory as not need to add eventListener to every child. So its have usefulness.




************************************************** ANS TO THE QUS NO: 05 ******************************************************

Differences between preventDefault() and stopPropagation() :

preventDefault(): It used to stop the default behavior of an element. Such as if i click a link , it stops the link for 
opening. 

stopPropagation(): Stops the element's event from bubbling up. 
              
