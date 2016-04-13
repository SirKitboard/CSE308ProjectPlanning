<%inherit file="myapp:templates/template.mako" />
<%def name="title()">Add Item</%def>
<%def name="head()">
<link href="${request.static_url('myapp:static/css/book.css')}" rel="stylesheet">
<script>
	window.isbn = ${isbn};
</script>
</%def>
<%def name="body()">
    <div id="addItemContainer" style="width:100%" class="container">
    </div>
</%def>
<%def name="scripts()">
<script type="text/babel" src="${request.static_url('myapp:static/js/book.jsx')}"></script>
</%def>
