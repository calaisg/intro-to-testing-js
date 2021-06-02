// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function()
{
    it('should be a defined function', function ()
    {
        expect(typeof sayHello).toBe('function');
    });

    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });

    it('should return the string "Hello, Jane!" when executed', function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });

    it('should return the string "Hello, Alex!" when executed', function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });

    it('should return the string "Hello, Pat!" when executed', function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });

    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello()).toBe("Hello, World!");
    });

    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello(false)).toBe("Hello, World!")
    });


});

describe('isFive', function()
{
    it('should be a defined function', function ()
    {
        expect(typeof isFive).toBe('function');
    });

    it('should return a boolean when called', function() {
        expect(typeof isFive()).toBe("boolean");
    });

    it('should return the boolean "true" when  5 executed', function() {
        expect(isFive(5)).toBe(true);
    });

    it('should return the boolean "true" when "5" executed', function() {
        expect(isFive("5")).toBe(true);
    });

    it('should return the boolean "false" when "6"  executed', function() {
        expect(isFive("6")).toBe(false);
    });
});

describe('isEven', function()
{
    it('should be a defined function', function ()
    {
        expect(typeof isEven).toBe('function');
    });

    it('should return a boolean when called', function() {
        expect(typeof isEven()).toBe("boolean");
    });

    it('should return the boolean "true" when 2 executed', function() {
        expect(isEven(2)).toBe(true);
    });

    it('should return the boolean "true" when -4 executed', function() {
        expect(isEven(-4)).toBe(true);
    });

    it('should return the boolean "false" when 3  executed', function() {
        expect(isEven(3)).toBe(false);
    });

    it('should return the boolean "false" when "banana"  executed', function() {
        expect(isEven("banana")).toBe(false);
    });

    it('should return the boolean "true" when "8"  executed', function() {
        expect(isEven("8")).toBe(true);
    });

    it('should return the boolean "false" when infinity  executed', function() {
        expect(isEven(Infinity)).toBe(false);
    });

    it('should return the boolean "false" when true  executed', function() {
        expect(isEven(true)).toBe(false);
    });

    it('should return the boolean "false" when false executed', function() {
        expect(isEven(false)).toBe(false);
    });




});