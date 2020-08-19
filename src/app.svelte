<script>
	function getItemHtml(html)
	{
		const style = window.getComputedStyle(document.documentElement);

		const background = style.getPropertyValue('--background');
		const foreground = style.getPropertyValue('--foreground');

		return html + /*html*/`<style>
			html
			{
				background: ${background};
				color: ${foreground};
			}
		</style>`;
	}
</script>

<style>
	:global(:root)
	{
		--background: #333;
		--foreground: #ddd;
	}
</style>

<div>
	HTML:
	<pre>
		{getItemHtml('Hello World')}
	</pre>
</div>