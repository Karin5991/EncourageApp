
var image1=new Image()
image1.src="assets/images/event.png"

var image2=new Image()
image2.src="assets/images/women.png"

var image3=new Image()
image3.src="assets/images/men.png"


var step=1
function slideit(){
	document.images.slide.src=eval("image" + step + ".src")
	if(step<3)
		step++
	else
		step=1
	setTimeout("slideit()",2500)
	}
slideit()

theDate= new Date();
var day = theDate.getDate();
var textdate = (theDate.getMonth() + 1) + '/' + theDate.getDate() + '/' + (theDate.getYear() - 100);

var numquotes = 31;
quotes = new Array(numquotes+1);
quotes[1] = "Everyone will experience the consequences of his own acts.  If his acts are right, he'll get good consequences; if they're not, he'll suffer for it. (Harry Browne)";
quotes[2] = "Whatever our creed, we feel that no good deed can by any possibility go unrewarded, no evil deed unpunished. (Orison Swett Marden)";
quotes[3] = "You cannot do wrong without suffering wrong. (Ralph Waldo Emerson)";
quotes[4] = "Choose the way of life.  Choose the way of love.  Choose the way of caring...Choose the way of goodness.  It's up to you.  It's your choice. (Leo Buscaglia)";
quotes[5] = "The great successful men of the world have used their imagination...they think ahead and create their mental picture in all its details, filling in here, adding a little there, altering this a bit and that a bit, but steadily building-steadily buildings. (Robert Collier)";
quotes[6] = "Each time you are honest and conduct yourself with honesty, a success force will drive you toward greater success.  Each time you lie, even with a little white lie, there are strong forces pushing you toward failure. (Joseph Sugarman)";
quotes[7] = "The people who get on in this world are the people who get up and look for the circumstances they want, and, if they can't find them, make them. (George Bernard Shaw)";
quotes[8] = "Success doesn't come to you...you go to it. (Marva Collins)";
quotes[9] = "The lure of the distant and the difficult is deceptive.  The great opportunity is where you are. (John Burroughs)";
quotes[10] = "Every situation, properly perceived, becomes an opportunity. (Helen Schucman)";
quotes[11] = "What this power is I cannot say; all I know is that it exists and it becomes available only when a man is in that state of mind in which he knows exactly what he wants and is fully determined not to quit until he finds it. (Alexander Graham Bell)";
quotes[12] = "The golden opportunity you are seeking is in yourself.  It is not in your environment; it is not in luck or chance, or the help of other; it is in yourself alone. (Orison Swett Marden)";
quotes[13] = "I do not think there is any other quality so essential to success of any kind as the quality of perseverance.  It overcomes almost everything, even nature. (John D. Rockefeller)";
quotes[14] = "The cure for all the ills and wrongs, the cares, the sorrows, and the crimes of humanity, all lie in the one word 'love'.  It is the divine vitality that everywhere produces and restores life. (Lydia Maria Child)";
quotes[15] = "Life in abundance comes only through great love. (Elbert Hubbard)";
quotes[16] = "Love is the immortal flow of energy that nourishes, extends and preserves.  Its eternal goal is life. (Smiley Blanton)";
quotes[17] = "What force is more potent than love. (Igor Stravinsky)";
quotes[18] = "Problems are only opportunities in work clothes. (Henry J. Kaiser)";
quotes[19] = "Opportunities? They are all around us...there is power lying latent everywhere waiting for the observant eye to discover it. (Orison Swett Marden)";
quotes[20] = "Most successful men have not achieved their distinction by having some new talent or opportunity presented to them.  They have developed the opportunity that was at hand. (Bruce Barton)";
quotes[21] = "We don't need more strength or more ability or greater opportunity. What we need is to use what we have. (Basil S. Walsh)";
quotes[22] = "Destiny is not a matter of chance; it is a matter of choice.  It is not something to be waited for; but, rather something to be achieved. (William Jennings Bryan)";
quotes[23] = "Opportunity rarely knocks on your door. Knock rather on opportunity's door if you ardently wish to enter. (B.C. Forbes)";
quotes[24] = "Each problem has hidden in it an opportunity so powerful that it literally dwarfs the problem.  The greatest success stories were created by people who recognized a problem and turned it into an opportunity. (Joseph Sugarman)";
quotes[25] = "In the middle of difficulty lies opportunity. (Albert Einstein)";
quotes[26] = "A wise man will make more opportunities than he finds. (Francois Bacon)";
quotes[27] = "There is no future in any job.  The future lies in the man who holds the job. (George Crane)";
quotes[28] = "Opportunity...often it comes in the form of misfortune, or temporary defeat. (Napoleon Hill)";
quotes[29] = "The price of success is perseverance.  The price of failure comes cheaper. (Anonymous)";
quotes[30] = "Adversity reveals genius, prosperity conceals it. (Horace)";
quotes[31] = "I contend that dishonesty will create a failure force that often manifests itself in other ways - ways not apparent to the outside observer. (Joseph Sugarman)";

var randomQuote = Math.floor((Math.random() * 31) + 1);

var quote_container = document.getElementById('quote');

quote_container.innerHTML +='<b>Encouragement for ' + textdate + '</b><br>';
quote_container.innerHTML += '<i>' + quotes[randomQuote] + '</i><br>';



<script type="text/javascript">
    function goToNewPage()
    {
        var url = document.getElementById('list').value;
        if(url != 'none') {
            window.location = url;
        }
    }
</script>





