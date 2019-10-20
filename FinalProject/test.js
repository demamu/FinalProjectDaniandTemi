"use strict";

describe("Use case 1 sort all courses by Name",function(){
    it("course sort by name is work?", function(){
        // eslint-disable-next-line no-undef
        assert.equal(sortObjectBySome(allCourses(), "name")[0].getName(),"Data Stracture");
    });
});

describe("Use case 2 view Fuculty & Student",function(){
    it("Abel is Student.", function(){
        // eslint-disable-next-line no-undef
        assert.equal(allUsers()[1].getFirstName(),"Abel");
    });
});

describe("Use case 3 sort all Student by firstName",function(){
    it("Student sort by name is work?", function(){
        // eslint-disable-next-line no-undef
        assert.equal(sortObjectBySome(allUsers(), "first")[0].getFirstName(),"Abel");
    });
});

describe("Use case 3 sort all Fuculty by firstName",function(){
    it("Fuculty sort by firstName is work?", function(){
        // eslint-disable-next-line no-undef
        assert.equal(sortObjectBySome(allUsers(), "first")[4].getFirstName(),"Sol");
    });
});