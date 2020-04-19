describe("testing SearchItems method", function(){
    beforeEach(function(){
        spyOn(window, 'page').withArgs(1).and.callFake(function(){})
        response=[{
            item : {snippet: {
                title : "testTitle1",
                description : "this is description 1",
                thumbnails : {
                    high : {
                        url : "testvalue1"
                    }
                }
            }
        }},{
            snippet: {
                title : "testTitle2",
                description : "this is description 2",
                thumbnails : {
                    high : {
                        url : "testvalue2"
                    }
                }
            }
        },{
            snippet: {
                title : "testTitle3",
                description : "this is description 3",
                thumbnails : {
                    high : {
                        url : "testvalue3"
                    }
                }
            }
        },
    nextPageToken=1,
    prevPageToken=2
];
    })
    it("should call page method ",function(){
        searchItems(response);
        expect(page).toHaveBeenCalled;
    })
})


describe("testing init method", function(){
    beforeEach(function(){
        window.value="test";
        window.value1="random";
    });
    it("should initialize window values to null",function(){
        init();
        expect(window.value).toBe(null);
        expect(window.value1).toBe(null);
    })
})


