import { Episodio } from "./episodio.js";
import { Plan } from "./plan.js";
import { Plataforma } from "./plataforma.js";
import { SeriesDeTelevision } from "./seriesTelevision.js";
export const dbSeries = new SeriesDeTelevision();
// Series
const serie1 = dbSeries.create_serie("img1.jpg", "Stranger Things");
const serie2 = dbSeries.create_serie("img2.jpg", "Kitmetsu no Yaiba");
// Serie1 Stranger Things
const serie1Ep1 = new Episodio("La desaparición de Will Byers", "Will Byers desaparece misteriosamente cuando vuelve a casa tras jugar diez largas horas con sus mejores amigos, mientras tanto una niña con asombrosas cualidades aparece en una cafetería de la localidad.", 45);
const serie1Ep2 = new Episodio("La loca de la calle Maple", "Los chicos se topan con la niña, ella le enseña un tatuaje a Mike con el número 11, indicándole que ese es su nombre. Once reconoce a Will en una foto por lo que los chicos suponen que sabe cual es el paradero de su amigo.", 45);
const serie1Ep3 = new Episodio("Todo está bien", "Nancy, cada vez más preocupada, busca a su mejor amiga Barb y descubre lo que Jonathan está tramando. Joyce está segura de que Will está comunicándose con ella mediante las luces de su casa.", 44);
serie1.add_episodio(serie1Ep1);
serie1.add_episodio(serie1Ep2);
serie1.add_episodio(serie1Ep3);
// Serie2 Kimetsu no Yaiba
const serie2Ep1 = new Episodio("Crueldad", "Tanjiro es un joven muy trabajador que se esfuerza mucho por cuidar de su madre y sus hermanos", 44);
const serie2Ep2 = new Episodio("El instructor, Sakonji Urokodaki", "Tanjiro y Nezuko continúan su viaje para volver a Nezuko nuevamente humana, al llegar a un santuario, Tanjiro lucha contra un demonio que comía los restos de un cadáver", 25);
const serie2Ep3 = new Episodio("Sabito y Makomo", "Tanjiro sigue el duro entrenamiento que le había dejado Sakonji", 24);
serie2.add_episodio(serie2Ep1);
serie2.add_episodio(serie2Ep2);
serie2.add_episodio(serie2Ep3);
// Categorias
dbSeries.create_category("Acción");
dbSeries.create_category("Terror");
dbSeries.create_category("Suspenso");
dbSeries.create_category("Animación");
dbSeries.create_category("Demonios");
dbSeries.create_category("Drama");
dbSeries.create_category("Romance");
dbSeries.add_categoryToSerie("Acción", serie1.get_name());
dbSeries.add_categoryToSerie("Terror", serie1.get_name());
dbSeries.add_categoryToSerie("Suspenso", serie1.get_name());
dbSeries.add_categoryToSerie("Acción", serie2.get_name());
dbSeries.add_categoryToSerie("Animación", serie2.get_name());
dbSeries.add_categoryToSerie("Demonios", serie2.get_name());
// Actores
const actor1 = dbSeries.create_actor("Millie Bobby", "millie.jpg", "Marbella, 19 de febrero de 2004 es una actriz y modelo británica");
const actor2 = dbSeries.create_actor("Finn Wolfhard", "finn.jpg", "Vancouver, Columbia Británica; 23 de diciembre de 2002 es un actor y músico canadiense");
const actor3 = dbSeries.create_actor("Noah Schnapp", "hoah.jpg", "Nueva York; 3 de octubre de 2004 es un actor estadounidense.");
const actor4 = dbSeries.create_actor("Sadie Sink", "sink.jpg", "Brenham, Texas; 16 de abril de 2002 es una actriz estadounidense");
const personaje1 = dbSeries.create_actor("Tankiro Kamado", "kamado.jpg", "Es el protagonista principal de Kimetsu no Yaiba");
const personaje2 = dbSeries.create_actor("Nezuko Kamado", "nezuko.jpg", "Es la hermana menor de Tanjiro. Ella fue transformada en Demonio");
const personaje3 = dbSeries.create_actor("Inosuke Hashibira", "jabali.jpg", "Fue un espadachín muy poderoso y talentoso");
const personaje4 = dbSeries.create_actor("Muzan Kibutsuji", "villano.jpg", " Es el antagonista principal de Kimetsu no Yaiba. Es un Demonio");
dbSeries.add_actorToSerie(actor1.get_name(), serie1.get_name());
dbSeries.add_actorToSerie(actor2.get_name(), serie1.get_name());
dbSeries.add_actorToSerie(actor3.get_name(), serie1.get_name());
dbSeries.add_actorToSerie(actor4.get_name(), serie1.get_name());
dbSeries.add_actorToSerie(personaje1.get_name(), serie2.get_name());
dbSeries.add_actorToSerie(personaje2.get_name(), serie2.get_name());
dbSeries.add_actorToSerie(personaje3.get_name(), serie2.get_name());
dbSeries.add_actorToSerie(personaje4.get_name(), serie2.get_name());
dbSeries.add_serieToActor(serie1.get_name(), actor1.get_name());
dbSeries.add_serieToActor(serie1.get_name(), actor2.get_name());
dbSeries.add_serieToActor(serie1.get_name(), actor3.get_name());
dbSeries.add_serieToActor(serie1.get_name(), actor4.get_name());
dbSeries.add_serieToActor(serie2.get_name(), personaje1.get_name());
dbSeries.add_serieToActor(serie2.get_name(), personaje2.get_name());
dbSeries.add_serieToActor(serie2.get_name(), personaje3.get_name());
dbSeries.add_serieToActor(serie2.get_name(), personaje4.get_name());
// Directores
const director1 = dbSeries.create_director("Shawn Levy", "levy.jpg", "Es un director, productor, y guionista de cine y televisión canadiense");
const director2 = dbSeries.create_director("Haruo Sotozaki", "haruo.jpg", "Es un director de cine y anime japonés");
const director3 = dbSeries.create_director("Matt Duffer", "matt.jpg", "conocidos profesionalmente como los hermanos Duffer, son escritores, directores y productores de cine y televisión");
dbSeries.add_directorToSerie(director1.get_name(), serie1.get_name());
dbSeries.add_directorToSerie(director3.get_name(), serie1.get_name());
dbSeries.add_directorToSerie(director2.get_name(), serie2.get_name());
dbSeries.add_serieToDirector(serie1.get_name(), director1.get_name());
dbSeries.add_serieToDirector(serie1.get_name(), director3.get_name());
dbSeries.add_serieToDirector(serie2.get_name(), director2.get_name());
// Plataformas
const plataforma1 = new Plataforma("Netflix", "netflix.com");
const plataforma2 = new Plataforma("Disney+", "disney+.com");
const plataforma3 = new Plataforma("Amazon Prime Video", "amazonprime.com");
dbSeries.add_Plataforma(plataforma1);
dbSeries.add_Plataforma(plataforma2);
dbSeries.add_Plataforma(plataforma3);
plataforma1.add_serie(serie1);
plataforma1.add_serie(serie1);
plataforma2.add_serie(serie1);
plataforma3.add_serie(serie2);
// Planes
plataforma1.add_plan(new Plan("Basico", 16900));
plataforma1.add_plan(new Plan("Etandar", 26900));
plataforma1.add_plan(new Plan("Premium", 38900));
plataforma2.add_plan(new Plan("Disney+", 25900));
plataforma2.add_plan(new Plan("Combo+", 41900));
plataforma2.add_plan(new Plan("Star+Disney+LIONSGATE+", 52900));
plataforma3.add_plan(new Plan("Prime mensual", 45000));
plataforma3.add_plan(new Plan("Prime anual", 400548));
