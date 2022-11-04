import "./about.css"
import Button from 'react-bootstrap/Button';

const Intro = () => {
    return (
        <>
            <div className="row header">
                <div className="col-md-9">
                    <h1 className="title"> What is Pokemon? </h1>
                    <hr />
                    <p>
                        Pokémon was invented by a Japanese man named Satoshi Tajiri and his friend Ken Sugimori, who is an illustrator.

                        Back in 1982 Satoshi started a gaming magazine together with his friends called Game Freak, but after a while he decided to start making his own video games, instead of writing about them.

                        In 1989 Satoshi turned Game Freak into a gaming company, and together with his friends they released a few games such as Pulseman, Yoshi and Mario & Wario, which did pretty well.

                        In the early 1990s, inspired by his childhood exploring forests and finding bugs and tadpoles, Satoshi came up with the idea for Pocket Monsters, or as it's better known Pokémon, and pitched it to Nintendo.
                    </p>
                    <p>
                        Origins of the Name, Pokemon?  <br />
                        The name Pokémon is a syllabic abbreviation of the Japanese brand Pocket Monsters.
                        The term "Pokémon", in addition to referring to the Pokémon franchise itself, also collectively refers to the many fictional species that have made appearances in Pokémon media as of the release of the eighth generation titles Pokémon Sword and Shield.
                        "Pokémon" is identical in the singular and plural, as is each individual species name; it is and would be grammatically correct to say "one Pokémon" and "many Pokémon", as well as "one Pikachu" and "many Pikachu".
                    </p>                                         
                        
                        <div className= "button">
                            <a  href='https://en.wikipedia.org/wiki/Pok%C3%A9mon' target="_blank" rel="noopener noreferrer"><center><Button variant="secondary">Find out more on the offical Wiki</Button></center></a>
                        </div>               
                </div>                               
            </div>
        </>
    );
};

export default History;