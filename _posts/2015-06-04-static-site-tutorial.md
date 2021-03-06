---
title: "Static Site Setup Tutorial"
layout: post
topcolor: red
excerpt_separator: ""
excerpt: "I love static websites. They're served very fast and security is practically not even a concern- no database to hack, no data to mine, nothing to pull or inject or mess with at all. This site was my first attempt at building a static site from nearly scratch, picking technologies that I barely understood and somehow stringing them together without really having much of a clue at all as to how anything worked."
---

# Static Site Setup Tutorial
## Using Jekyll, Wercker, and AWS to get a static site hosted for cheap

I love static websites. They're served very fast and security is practically not even a concern- no database to hack, no data to mine, nothing to pull or inject or mess with at all. This site was my first attempt at building a static site from nearly scratch, picking technologies that I barely understood and somehow stringing them together without really having much of a clue at all as to how anything worked. 

After setting up a second site on the same stack, very thoughtfully and with a better understanding of what I'm doing, I thought I'd share some of the process to setting up your own static website using Jekyll as your static site generator, Wercker as your autodeployment tool, and AWS S3 as your host. Note that this isn't an in-depth tutorial for using every individual tool, just a guide on linking everything together.

#### Why any of this?

I chose to host and build my site this way for a variety of reasons. First, I was a brand new development student and the tools were simple enough for me to learn from experimenting with them. Second, I *like* being in control of my site and knowing how it all works instead of using one of the common hosting solutions like godaddy or hostgator. Third, I wanted to learn- all of the tools helped me understand some valuable basics of creating and maintaining websites, all of which has helped a great deal in my time since working on both static sites and dynamic web applications.

#### Why these?

* Jekyll

  Jekyll is a terrific static site generator that benefits from Ruby knowledge for more in-depth customization but doesn't require it to get a clean looking site up and running. I did no Ruby customization of any kind for this site. Jekyll also allows for writing most pages/posts in markdown which saves some time.  

* Github/Bitbucket

  Version control should be used on pretty much everything- I've even started using it for writing projects on private repos. I use Github for any public or open-source projects I have, and Bitbucket for anything I want private. You will need to use one or the other for hooking up your codebase to Wercker.  

* Wercker

  Wercker has a clean and easy-to-use interface, and their recent move over to using Docker for their build boxes is exciting for any build trouble-shooting that you may need to do for more advanced setup (though we'll be using their classic box setup for this tutorial). Their configuration is relatively light for static site building, and it integrates smoothly with Jekyll and AWS.  

* AWS S3

  AWS is fast and reliable, and access to their CDN means that your site will be served quickly pretty much anywhere. Using S3 is extremely cheap as you pay by volume of storage instead of other metrics. It's also very easy to configure, and Amazon docs for their AWS products are terrific.  

* DNS

  You can choose your own DNS provider, but as I'm hosting on AWS I chose to use Route53 for domain management. You do end up paying a nominal fee for routing, but I've never paid more than $.40/month (likely since I have so little traffic haha).  

#### Step 1: Hosting Setup

I like to work from the backend forward and absolutely subscribe to the policy of "Deploy early and deploy often", so we'll start here.

You'll need to purchase your domain and set up your DNS service which could take a few days to go through. When I bought my first domain with Gandi.net, it took two days, but purchasing through Route53 had me running within 2 hours. 

Once your domain is up and running, you can start configuring your S3 bucket for web hosting. If you're not familiar with S3 or cloud, these S3 buckets are essentially sectioned out chunks of storage that you can use as repositories for files or data of your choosing-essentially a cloud drive that's been optimized for hooking into websites. AWS has terrific documentation on how to set this up- it's straight forward and you don't really have to understand everything you're doing so long as you can follow their directions carefully. In short, you'll need to:

  1. Set up two buckets named *www.example.com* and *example.com* (referred to as hosting bucket moving forward).
  2. Set up your *www.* bucket to route to your hosting bucket.
  3. Enable your hosting bucket to act as a static website host.
  4. Add a special permissions policy to your hosting bucket (may need to configure an IAM policy if you don't have one already).
  5. Set your default page name (typically index.html).

You can see the [AWS docs here](http://docs.aws.amazon.com/gettingstarted/latest/swh/website-hosting-intro.html) for both gettng a domain through Route53 and . I strongly recommend that you spend time reading through that page and the pages it links to if you're not sure what you're doing- it'll help a great deal to trouble-shoot in case you run into any issues!

#### Step 2: Jekyll

Now it's time to actually build your site. Using Jekyll is pretty straightforward- mostly you'll just be doing front-end development work as you craft your html layouts, throwing on CSS and JS to your liking. Jekyll has great integration with Sass, my favorite tool for writing CSS, and it allows you to preview your site build with the simple ```jekyll serve --watch``` command. Check out [their docs](http://jekyllrb.com/) for help in getting your site up and running.

I recommend that at this point, you only make a small shell of your site- hell, just use the basic jekyll templated site that they give you out of the box! Getting your continuous deployment set up early will make actually developing your site a breeze since getting your changes live is just a matter of pushing to git master. 

![initial jekyll file project build](http://snag.gy/3HzbV.jpg)
<div style="margin:0 auto;text-align:center;">Initial Jekyll file project build</div>

You'll want to make sure that you're pushing to your git host, whether it's Github or Bitbucket, and be sure to keep your files organized and structured in a sensible way. I strongly recommend sticking as close to Jekyll's templated structure as you can. Also be sure to update your _config.yml which Jekyll uses to build some global Jekyll metadata into your site for you. This should be at your project root.

#### Step 3: Gemfile

For a standard Jekyll project, a Gemfile likely wouldn't be necessary. If you're deploying manually, you won't need one at all. However, since we're deploying to Wercker, we need it so that our Wercker box will know what gems to install in order to build our site- namely, the jekyll gem! You'll also want to add any other gems that are necessary for building your site. Keep it thin or else your builds may start to take a while. Here's all you need in a basic Gemfile:

```
source "https://rubygems.org"

gem 'jekyll'
gem 'sass'
```

I'm not 100% sure if the Sass gem is needed or if it comes packaged with Jekyll, but just to be safe, I name it explicitly. Be sure to include this in your project root. (Note: Gemfile is for gem management through 'bundler'; check their docs out [here](http://bundler.io/gemfile.html)).

#### Step 4: Wercker

Getting a [Wercker](http://wercker.com/) account is as simple as linking to your Github or making your own account. You'll need to link to your version control tool (again, Github or Bitbucket only at this time!), and once you do, you can start your setup by adding a new application. It'll sync with your version control and look for the repo that your site code is stored on. Once you get it linked, you're ready to start configuring.

First, lets configure our build setup. This is done by making a ```wercker.yml``` at your project root. I use the following code for both projects:

```
box: wercker/ruby
build:
  steps:
      - bundle-install
      - script:
          name: generate site
          code: bundle exec jekyll build --trace
deploy:
    steps:
        - s3sync:
            key_id: $KEY
            key_secret: $SECRET
            bucket_url: $URL
            source_dir: _site/
            opts: |
                --add-header Cache-Control:max-age=60
                 --no-preserve
```

![Successful wercker build!](http://snag.gy/DK8Is.jpg)
<div style="margin:0 auto;text-align:center;">Successful Wercker build!</div>

Note that this is [yml](http://en.wikipedia.org/wiki/YAML) so the syntax has to be EXACT- extra spaces or white space can break it without any seeming rhyme or reason. Also, this is using the 'classic' Wercker stack- I couldn't find any information on writing this build config on the new Docker stack, but hopefully I'll be able to switch over soon. You'll also notice three variables- $KEY, $SECRET, and $URL. Those will link up with Environmental variables that we'll set on our wercker deploy config- this keeps our AWS secret credentials hidden since this file must be comitted to source control.

![Wercker deploy config](http://snag.gy/45QW5.jpg)
<div style="margin:0 auto;text-align:center;">Wercker deploy config</div>

Next we need to go to our Wercker application and get our deploy set up. Go to the application settings and scroll until you find "Add Deploy Target". I name mine production since I don't need a test environment- another advantage of using a static site. Be sure to select 'auto deploy' and from your main version control, likely called ```master```.

Next we'll add three variables to our deploy pipeline. Unless you have a specific need to do otherwise, I recommend adding them to this deploy specifically instead of the overall application. Since you'll need your AWS IAM credentials, keeping them in as small as a scope as is required is overall just best practice. Now we can add:

1. KEY - this will be the public key given to you by your AWS IAM account.
2. SECRET - secret key from your AWS IAM account.
3. URL - your website's base url prefixed with ```s3://```. For this site, it is ```s3://tremulaes.com``` (no www.). 

Although you can hardcode the url directly into your ```wercker.yml```, I don't because I'm lazy and want to reuse the exact same file between projects.

Moving further down, I set my app as public on Wercker since I have no reason not to, but this is up to you. Be sure to hit the 'Fix Webhook' button so that it'll automatically build your site whenever you push to your master branch (as configured above). Just underneath that, you'll have to choose your 'Infrastructure' stack- be sure to update this to 'Infra stack (classic)', or 'Classic (Andorian)'. They're the same thing but Wercker seems to call it different things, so just choose whatever has 'classic' and NOT what has 'Docker' in the name.

![Successful Wercker Deploy!](http://snag.gy/6jUoa.jpg)
<div style="margin:0 auto;text-align:center;">Successful Wercker deploy!</div>

#### 5. Testing and Completion

Voila! Assuming each individual step has been completed successfully, your public site should be a) live at your url and b) building and deploying with every push to master. If you run into issues, read your build failures carefully and always look first at your config files- ```Gemfile```, ```_config.yml```, and ```wercker.yml```. Google your errors and read through the technical documentation of the services you're using.

And be sure to enjoy your new site!