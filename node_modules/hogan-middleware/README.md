hogan-middleware
================

Middleware component to use Hogan.js mustache templates as views in an Express server

Usage
=====

    var app = express();

    app.configure(function () {
      app.set('views', __dirname + '/views'); // tell express which directory your views are in
      app.set('view engine', 'mustache');     // name your templates
      app.engine('mustache', require('hogan-middleware').__express); // register the engine
    });

Once registered, your routing in express can use a mustache file name as the view to be rendered:

    app.get('/', req, res, next) {
      res.render('home', { SiteName: 'My Website' });
    }

In this case there is a file named `home.mustache` in the `views` directory that may have content as:

    <!doctype html>
    <html>
      <head><title>Hello World</title></head>
      <body>
        <h1>{{SiteName}}</h1>
      </body>
    </html>

Partial Templates
=================

Mustache allows the use of partial templates, this is supported by the middleware component by making all templates
available as partial templates when rendering a template.

When `home.mustache` is being used as the name of the template to be rendered, that can include `a.mustache` from the
views directory by adding `{{>a}}`. As `a.mustache` is rendered as a partial, that also has all templates available
to it for use as partials, so could in turn have `{{>b}}` to include a nested partial.

To allow for a tidy source tree, templates can be in any number of sub-directories under the main views directory,
they are all made available for use as partials without any path identifier.

Note - multiple templates with the same name but in different directories will overwrite each other.

Note - don't include the same template as a partial inside itself.

Live Updating
=============

As express uses the the render engine for the first time, a series of watches are added to any sub-directory of the
views directory so that any changes are automatically reloaded for you while the server is still running.

