### Natours website

This website has been designed as part of a project.

# Key points of this project:

- We learned the clip-path usage: the hero section image has been cut, with the clip path
  CSS value. The image has been given as `background: url()` which has also a linear gradient with some
  opacity.
- Following, the 3 images have been `absolute` placed, plus on hover they have a scale property + `z-index:3;`

- This is the effect for a gradient writing:

```
background-image: linear-gradient(to right, $light-color, $dark-color);
  -webkit-background-clip: text;
  color: transparent;
  display: inline-block;
```

- Next, the background has been "Skewed" and the content has been "skewed back"

- The flipping card have been created setting the HTML with front and retro code. The image on top of the front card
  have been added as `background: url()`, given a linear gradiend and `path:clip`.

```
.card {
  perspective: f.rem(1150);
  -moz-perspective: f.rem(1150);
  position: relative;
  //! give them both the same height
  height: f.rem(500);
}
```

1. Perspective makes sure che rotation doesn't take the whole screen as effect.
2. height important to make the cards basically appear

- ```
  &__heading-span {
    padding: f.rem(7) f.rem(15);
    -webkit-box-decoration-break: clone;
    //! makes the background larger on
    //! sides of the text
    box-decoration-break: clone;

    &--1 {
      background-image: linear-gradient(
        to right bottom,
        rgba($dark-color, $alpha),
        rgba($light-color, $alpha)
      );
    }
  ```

1. **Box decoration break** modify the background , "aligning" it

- This is quite important:

```
  &__side {
    border-radius: 10px;
    text-align: center;
    height: 100%;
    transition: all 0.8s ease;
    // position absolute so the card stack on each other
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    // prevent the image to have angles and so to overflow
    overflow: hidden;
    // mostra la parte front, nasconde la retro
      backface-visibility: hidden;
    box-shadow: 0 1.5rem 4rem rgba($black, 0.2);}

```

1.  The cards in order to stack on each other take the absolute property

# [Check Natours!](https://matteonegridev.github.io/Natours/)
