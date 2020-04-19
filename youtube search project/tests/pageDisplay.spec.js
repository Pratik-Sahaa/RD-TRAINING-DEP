describe("testing Page method",function(){
    beforeEach(function(){
        spyOn(window,'removeAllElementsFromResults').and.callFake(function(){
        })
        item={
            snippet: {
                title : "testTitle1",
                description : "this is description 1",
                thumbnails : {
                    high : {
                        url : "testvalue1"
                    }
                }
            }
        }
        videoList=[item, item, item];

        var resultsDiv = document.createElement('div');
        resultsDiv.setAttribute('id','results');
        var element=document.createElement('template');
        element.setAttribute('id','template');
        var containerDiv= document.createElement('div');
        containerDiv.setAttribute('id', 'container');
        var test_image = document.createElement('img');
        test_image.setAttribute('id','image');
        var test_title = document.createElement('h2');
        test_title.setAttribute('id','title');
        var test_details=document.createElement('p');
        test_details.setAttribute('id', 'details');
        containerDiv.appendChild(test_image);
        containerDiv.appendChild(test_title);
        containerDiv.appendChild(test_title);
        element.appendChild(containerDiv);
        resultsDiv.appendChild(element);
        document.body.appendChild(resultsDiv);
    }) 
    it("should call removeAllElementsFromResults",function(){
        page(1);
        expect(removeAllElementsFromResults).toHaveBeenCalled();
    })
    it("should add content to page",function(){
        page(1);
        expect(document.querySelector('#img').getAttribute('src')).toBeDefined();
        expect(document.querySelector('#title').textContent).toEqual("testTitle1");
        expect(sampleDiv.querySelector('#details').textContent).toBe("this is description 1");
    })
});


describe("testing removeAllElementsFromResults",function(){
    beforeEach(function(){
        var results = document.createElement('div');
        results.setAttribute('class', 'results');
        var container = document.createElement('div');
        container.setAttribute('class','container');
        results.appendChild(container);
        var test_title1 = document.createElement('h2');
        test_title1.innerHTML="Hello";
        container.appendChild(test_title1);
        document.body.appendChild(results);
    })
    it("should remove all elements from container", function(){
        removeAllElementsFromResults();
        var c=document.querySelectorAll('.container');
        expect(c.length).toBe(0);
    })
})