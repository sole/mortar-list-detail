# A List/Detail Template for Open Web Apps

*NOTE: This template has been updated with a new, drastically simpler structure as of June 2013.*

This template provides a basic list/detail [Open Web App](https://developer.mozilla.org/en-US/docs/Web/Apps) with a few lines of HTML, JavaScript and CSS.

It uses several [X-Tags](http://www.x-tags.org/) custom components to build the structure and get the sliding behaviour in a clear and very simple way.

[See the template in action](http://mozilla.github.com/mortar-list-detail/).

## Usage

There are a few ways to get this template:

* ```git clone git://github.com/mozilla/mortar-list-detail.git myapp``` will create a ```myapp``` directory with the contents of the template, or
* download [a ZIP file](https://github.com/mozilla/mortar-list-detail/archive/master.zip) containing the latest version, or
* ```volo create myapp mozilla/mortar-list-detail``` if you use [volo](http://volojs.org/)

Then, simply open the ```index.html``` file to get started.

## Customizing

There are numerous comments in the code to guide you along, but you can delete them once you're done with them.

### Content

The content is specified in ```index.html```. You can change the existing ```article```s in the list, or add more. Everything inside the ```<div class="contents"></div>``` elements will be shown in the detail view.

### Appearance

The general appearance is defined in ```css/app.css```.

The transition for the **sliding behaviour** is defined in ```css/slidebox.css```. If you want to play with settings such as the easing function and the transition length, this is your place.

Finally, you can also change the **install button** look and feel by editing the ```css/install-button.css``` file.

