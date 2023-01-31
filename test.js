const challenge = require("./index.js");

describe("Handles input wih no copy pasting", () => {
  test("returns a string", () => {
    expect(typeof challenge("hello")).toBe("string");
  });
  test("returns a string with text hello", () => {
    expect(challenge("hello")).toBe("hello");
  });
});

describe("Handles input wih copy but no pasting", () => {
  test("returns a string with text hello when given string with copy command after the string hello", () => {
    expect(challenge("hello[CTRL+C]")).toBe("hello");
  });
  test("returns a string with text hello when given string with copy command", () => {
    expect(challenge("[CTRL+C]hello")).toBe("hello");
  });
});

describe("Handles input to copy and paste words", () => {
  test("copies a string when given a string, a copy command and a paste command", () => {
    expect(challenge("[CTRL+C]hello[CTRL+C] [CTRL+V]")).toBe("hello hello");
  });

  test("copies a string when given a string, a copy command and a paste command", () => {
    expect(challenge("[CTRL+C]hello[CTRL+C] [CTRL+V] [CTRL+V]")).toBe(
      "hello hello hello"
    );
  });
});

describe("Handles copy and pasting in between a word", () => {
  test("copies a string when given a string, a copy command and a paste command", () => {
    expect(
      challenge("[CTRL+C]hello[CTRL+C] [CTRL+V][CTRL+C] and [CTRL+V]")
    ).toBe("hello hello and hello hello");
  });
});

describe("Handles longer input strings", () => {
  test("handles copying and pasting into a sentence", () => {
    expect(
      challenge(
        "the first[CTRL+C] Coding Challenge was [CTRL+V] string manipulation task"
      )
    ).toBe("the first Coding Challenge was the first string manipulation task");
  });
  test("returns the same longer string when there is nothing to copy", () => {
    expect(
      challenge("[CTRL+V]the tall oak tree towers over the lush green meadow.")
    ).toBe("the tall oak tree towers over the lush green meadow.");
  });
});

describe("Handles input with CTRL+X command", () => {
  test("returns string hello when given a string of [CTRL+X] and hello", () => {
    expect(challenge("[CTRL+X]hello")).toBe("hello");
  });
  test("returns empty string hello when given a string of hello and [CTRL+X]", () => {
    expect(challenge("hello[CTRL+X]")).toBe("");
  });
  test("returns string hello when given a string of [CTRL+X] and hello", () => {
    expect(challenge("hello[CTRL+X] [CTRL+V]")).toBe("hello");
  });
});

describe("Handles longer sentences from coding challenge group", () => {
  test("returns longer string with ctrl+c and ctrl+v", () => {
    expect(
      challenge(
        "the first[CTRL+C] Coding Challenge was [CTRL+V] string manipulation task"
      )
    ).toBe("the first Coding Challenge was the first string manipulation task");
  });
  test("returns longer string 2 with ctrl+c and ctrl+v", () => {
    expect(
      challenge("the big red[CTRL+C] fox jumps over [CTRL+V] lazy dog.")
    ).toBe("the big red fox jumps over the big red lazy dog.");
  });

  test("returns longer string 3 no paste command", () => {
    expect(
      challenge("[CTRL+V]the tall oak tree towers over the lush green meadow.")
    ).toBe("the tall oak tree towers over the lush green meadow.");
  });

  test("returns longer string 4 with ctrl+c and ctrl+v commands and a full stop at end of sentence not connected to a word", () => {
    expect(
      challenge(
        "the sun shines down[CTRL+C] on [CTRL+V][CTRL+C] the busy [CTRL+V]."
      )
    ).toBe(
      "the sun shines down on the sun shines down the busy the sun shines down on the sun shines down."
    );
  });

  test("returns longer string 5 with ctrl+c and ctrl+v", () => {
    expect(
      challenge(
        "a majestic lion[CTRL+C] searches for [CTRL+V] in the tall grass."
      )
    ).toBe("a majestic lion searches for a majestic lion in the tall grass.");
  });
  test("returns longer string 6 with ctrl+x and ctrl+v", () => {
    expect(
      challenge(
        "the shimmering star[CTRL+X]Twinkling in the dark, [CTRL+V] shines bright."
      )
    ).toBe("Twinkling in the dark, the shimmering star shines bright.");
  });
  test("returns longer string 7 with ctrl+x, ctrl+c and ctrl+v commands", () => {
    expect(
      challenge(
        "[CTRL+X]a fluffy white cloud drifts [CTRL+V][CTRL+C] across the sky, [CTRL+V]"
      )
    ).toBe(
      "a fluffy white cloud drifts across the sky, a fluffy white cloud drifts"
    );
  });
});
