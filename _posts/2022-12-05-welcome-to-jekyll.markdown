---
layout: post
title:  "Welcome to Jekyll!"
date:   2022-12-05 10:16:16 -0500
categories: jekyll update
---
You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.
\\[ \frac{1}{n^{2}} \\]
$$ x = y^2 $$

...the above was successful blocked; the below should be equivalent:

\\[ x = y^2 \\]

inline:  \\(\sum_{i=0}^n i^2 = \frac{(n^2+n)(2n+1)}{6}\\)



This sentence uses `$` delimiters to show math inline:  $\sqrt{3x-1}+(1+x)^2$

...the above `$` syntax was corrected with escape backslashes:  \\(\sqrt{3x-1}+(1+x)^2\\)

Jekyll requires blog post files to be named according to the following format:

`YEAR-MONTH-DAY-title.MARKUP`

Where `YEAR` is a four-digit number, `MONTH` and `DAY` are both two-digit numbers, and `MARKUP` is the file extension representing the format used in the file. After that, include the necessary front matter. Take a look at the source for this post to get an idea about how it works.

Jekyll also offers powerful support for code snippets:

{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
