<div id="obs-landing-page">
  <h1>$Title</h1>
  <div>$Content</div>
  <ul>
    <% loop $getBookList %>
        <li>
          <a href="{$Top.Link}getBookStartPage/$ID">$Title</a>
        </li>
    <% end_loop %>
  <ul>
</div>
