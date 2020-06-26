const express = require("express"); //importing express into our file using require method
const authorsRouter = express.Router(); //router for all authors
const Authordata = require("../model/Authordata");
function routerauthor(nav){  
    authorsRouter.get("/",function(req,res){
        Authordata.find()
        .then(function(authors){
            res.render("authors",{
                nav,
                title:"List of authors",
                authors
            })
        });
       
    });
    authorsRouter.get("/:id",function(req,res){
        const id = req.params.id;
        Authordata.findOne({_id: id})
        .then(function(author){
            res.render("author",{
                nav,
                title:"Author",
                author
            })
        });
        
    });
    return authorsRouter;
}
module.exports = routerauthor;




  // var authors =[
    //     {
    //         name:"Stephenie Meyer",
    //         field:"Novelist",
    //         img:"twi_aut.jpg",
    //         content:"Stephenie Meyer (born December 24, 1973) is an American novelist. She is best known for her vampire romance series Twilight, which has sold over 100 million copies, with translations into 37 different languages. Meyer was the bestselling author of 2008 and 2009 in the U.S., having sold over 29 million books in 2008,and 26.5 million in 2009.Meyer received the 2009 Children's Book of the Year award from the British Book Awards for her Twilight series finale Breaking Dawn.An avid young reader, she attended Brigham Young University, marrying at the age of twenty-one, before graduating with a degree in English in 1997. With no prior experience as an author, the idea for the Twilight series came to her in a dream. Influenced by the work of Jane Austen and William Shakespeare, she wrote Twilight soon thereafter. After many rejections, Little, Brown and Company offered her a $750,000 three-book deal which led to a four-book series, several spin-off novels and novellas, and a series of commercially successful film adaptations. Aside from young adult novels, Meyer has ventured into adult novels with The Host (2008) and The Chemist (2016). Meyer has worked in film production and has her own production company, Fickle Fish Films. Meyer produced both parts of Breaking Dawn including two other novel adaptations."
    //     },
    //     {
    //         name:"Chetan Bhagat",
    //         field:"Novelist",
    //         img:"Chetan_Bhagat.webp",
    //         content:"Chetan Prakash Bhagat (born 22 April 1974) is a well known Indian author, columnist, Bollywood screenwriter, social media influencer and motivational speaker. He was included in Time magazine's list of World's 100 Most Influential People in 2010.Bhagat holds degrees in Mechanical engineering and MBA from prestigious Indian institutions like IIT & IIM respectively. He started his career as an investment banker, but left it after a few years to pursue his passion in writing. He has written eight novels and three non-fiction books. Right from the time his first best-selling novel Five Point Someone was published in 2004, his subsequent novels have found a place on bestsellers lists. His novels will not be there on lists like 'Top 10 bestselling Indian novels of all time' or '12 best Indian novels that everyone needs to read,’ but one of his novels 'Five Point Someone' does find a place in a list like '20 best selling novels you must read.’ Bhagat has been described as the biggest selling English language novelist in India's history. However, Bhagat has also been criticised for his writing skills as not being literary, but 'formulaic and targeting a specific audience' and that he is 'literally, the Maharaja Mac of literature' as his books are like 'processed material that people consume in a hurry'. Bhagat has even been accused of plagiarism for his novel 'One Indian Girl', a charge he has denied and rubbished the allegations as unfounded and deeply unfortunate."
    //     },
    //     {
    //         name:"Michael Newton",
    //         field:"Psychologist",
    //         img:"michael.jpg",
    //         content:"Michael Newton, Ph.D is the Founder of The Newton Institute for Life Between Lives Hypnotherapy (TNI) and served as the first President from 2002-2005. The organization briefly began as the Society for Spiritual Regression (SSR) and then evolved into The Newton Institute to honor its Founder in 2005.Dr. Newton continued to serve on the TNI Board until his death in late 2016. He held a doctorate in Counseling Psychology, was a certified Master Hypnotherapist and member of the American Counseling Association. He was on the faculty of higher educational institutions as a teacher and counselor while also active in private practice. In addition, Dr. Newton spent time as a corporate consultant and worked as a behavioral counselor and group therapy director for community mental health centers and spiritual renewal organizations in cooperation with hospital and social service agencies. He was a hypnotherapist for over 50 years and a LBL therapist for over 40 years. He is considered a pioneer in uncovering the mysteries about life after death through the use of Spiritual Regression.Dr. Newton is the author of three best selling books, Journey of Souls: Case Studies of Life Between Lives (1994), Destiny of Souls: New Case Studies of Life Between Lives (2000) and Life Between Lives Hypnotherapy (2004) published by Llewellyn. These books have been translated into over 40 languages. In 2001 his second book was awarded “Metaphysical Book of the Year” by the independent publishers association at their annual Book Exposition of America meeting. He is also the editor of the latest release Memories of the Afterlife (2009), which includes intriguing case studies written by members of TNI’s growing global network of Life Between Lives Therapists."
    //     },
    //     {
    //         name:"Allie esiri",
    //         field:"Poet",
    //         img:"allie.jpg",
    //         content:"Allie Esiri (born 26 January 1967), née Allie Byrne, is a British writer and former stage, film, and television actress. She created iF Poems, an educational poetry app, the accompanying hardback anthology iF: A Treasury of Poems for Almost Every Possibility, and The Love Book, both an interactive literary app on iOS and Android and a hardback book of best-loved poems, quotations, and letters on the theme of love. Esiri's anthology, published by Pan Macmillan on 8 September 2016, A Poem for Every Night of the Year won the IBW Book award 2017. Esiri's anthology, A Poem for Every Day of the Year was published in hardback and audiobook by Pan Macmillan on 7 September 2017 and her new anthology Shakespeare for Every Day of the Year will be published by Pan Macmillan in hardback, e-book and audiobook on 19 September 2019."
    //     },
    //     {
    //         name:"Amish Tripathi",
    //         field:"Novelist",
    //         img:"amish.jpg",
    //         content:"Amish Tripathi (born 18 October 1974) is an Indian diplomat, columnist, and author. He is known for his books like Shiva Trilogy and Ram Chandra series. In 2017, Tripathi launched his first non-fiction book, Immortal India. Tripathi's books sold over 5 million copies in the Indian subcontinent since 2010.Forbes India has regularly ranked Tripathi among the top 100 celebrities in India.He was listed among the 50 most powerful Indians by India Today in 2019. He is also the first author in Indian publishing history to have all 6 of his fiction books simultaneously in the top 10 of the HT-Nielsen Bookscan national bestseller list for 4 weeks in a row. All of Tripathi's books (released and planned) are on religious topics. Being an atheist in his youth, Amish returned to faith while writing his first book. His grandfather was a Sanskrit scholar and a Pandit in Varanasi, Uttar Pradesh. Tripathi says that he gathered most of his knowledge of Hindu theology and religion from his grandfather and his religious parents. He believes that 'religiosity and liberalism go hand-in-hand in India'. Sandipan Deb, former Executive Editor of Outlook and Editor of Financial Express, writes of the philosophical depth of Amish's books: 'Through all Amish’s books flows a current of liberal progressive ideology: about gender, about caste, about discrimination of any kind. And what I believe separates him from the horde of Indian writers who have jumped on to the mythology bandwagon after Shiva’s (Shiva Trilogy's) success, is his historical research'."
    //     }
    // ];