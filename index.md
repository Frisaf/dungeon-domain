---
layout: layout.html
title: Home
---
# Home
<hr>
<p>Welcome to Dungeon Domain! This website is meant to serve as an archive for the session summaries of the adventurers of Dungeon Domain's journeys. Don't remember what happened last session, or maybe you weren't present and need to catch up? Or maybe you even are a new player! If so, welcome. Regardless of your intentions, you are more than welcome to read!</p>

<p><em>/ Ash, Dungeon Master</em></p>

<div>
    <button class="accordion">Characters</button>
    <div class="panel">
        {%- for post in collections.posts -%}
            {%- if "player-character" in post.data.tags -%}
                <a href="{{ post.url }}"><div class="panelBox">
                    <span>{{ post.data.title | capitalize }}</span>
                </div></a>
            {%- endif -%}
        {%- endfor -%}
    </div>
</div>

## About the Campaign
<hr>
<p>The campaign takes place in the world of Wildemount, a setting created by Mathew Mercer of Critical Role. This is also the world where the Mighty Nein's adventures took place. The game system used is Dungeons & Dragons 5th Edition. <a href="https://owlbear.rodeo" target="_blank">Owlbear Rodeo</a> is used for battle maps. We play Sundays 19:00 GMT +1</p>