  - ### CSS
    
    CSS stands for Cascading Style sheets which is a stylesheet language
    used to design out html pages or xml. It describes how the elements
    of html can be displayed / rendered on the screen to the user. We
    can change the properties of elements such as color, background
    color, font size, alignment, etc using css. CSS is included using
    the style attribute.  
    
    1.  #### INLINE CSS
        
        Inline CSS is used to add css to a particular html element only.
        Inline css is not recommended if our html code is large as it
        reduces the indexing. It is good only for small html codes.  
        Ex:
        ```
        <h5 style="color:red;"> Inline CSS </h5>
        ```
    2.  #### INTERNAL CSS
        
        Instead of writing css everywhere in the html elements we can
        write whole css for the html file under the head section using
        the style tags.  
        Ex:

        ```<p id="internal">Lorem ipsum dolor sit amet consectetur.</p>```
        

    3.  #### EXTERNAL CSS
        
        The best practice of using CSS is by External CSS. In this case
        we make an additional CSS file using a .css extension and then
        link this file to our html file using the \<link\> element in
        the head section. Ex: The Code in CSS File:  
        .externalcss{ color: yellow; }  
        
        The Code in HTML File: 

        ```<p class="externalcss">Lorem ipsum dolor sit amet.</p>```

  - ### NAVIGATE FROM SECTIONS USING ID
    
    We can navigate from one section to another of the same webpage by
    using <span>tag and using CSS ID’s. Suppose we want to navigate to
    id “navigate” then we will create an</span> <span>tag by giving it
    the id in the href attribute.  
    Ex:  
    <span id="navigate">This is navigated place.</span>  
    </span>[Click here to navigate](#navigate)
