import React, { useState, useEffect } from "react";
// import PageInput from './PageInput'
import { API_URL } from "../Nav/config";
import BulletPoints from "./BulletPoints";
import TextPresenter from './TextPresenter'

const Article = props => {
  const isAdmin = props.isAdmin;
  const [bulletPoints, setBulletPoints] = useState([]);
  const [pageTextDisplay, setPageTextDisplay] = useState([])

  const getBulletPoints = async props => {
    await fetch(`${API_URL}/sections`)
      .then(response => response.json())
      .then(data =>
        data.map(element => (
          <BulletPoints
            bulletPointRead={element}
            key={element._id} /* refresh={this.getRead} */
            isAdmin={isAdmin}
          />
        ))
      )
      .then(components => setBulletPoints(components))
      .catch(err => console.log(err));
  };

  const getPageTextInfo = async () => {
    await fetch(`${API_URL}/sections`)
    .then(response => response.json())
    .then(data =>
      data.map(element => (
        <TextPresenter pageTextInfo={element}
        key={element._id}
        isAdmin={isAdmin}/>
      ))
    )
    .then(components => setPageTextDisplay(components))
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getBulletPoints();
    getPageTextInfo();
  });

  return (
    <>
      <fieldset className="mb-3 form-group">
        <legend>Overview</legend>
        <ul>{bulletPoints}</ul>
      </fieldset>

    {pageTextDisplay}

      <div className="text-body ">
        <h3 id="section1" className="section-header">
          Section 1
        </h3>
        <p className="firstParagraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          sed accumsan orci, in vehicula tortor. Nullam justo nisi, placerat ac
          molestie ut, pretium ornare sapien. Vestibulum gravida lacus et tempus
          tincidunt. Sed lobortis, purus in varius dignissim, purus elit
          suscipit leo, non tincidunt sem tellus id ante. Aenean vitae molestie
          felis. Proin volutpat magna magna, et aliquam quam ultricies id. Nam
          varius quam ut est porta consectetur. Donec vehicula velit ut luctus
          pulvinar. Orci varius natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus. Quisque ornare et augue vitae
          pulvinar. Proin tristique efficitur aliquam. Etiam semper euismod
          lobortis. Suspendisse potenti. Morbi at metus sapien.
        </p>
        <p>
          Nunc sit amet dolor lorem. Suspendisse urna urna, fringilla rhoncus
          aliquet sit amet, interdum ut nisl. Suspendisse eget fermentum arcu.
          Etiam tincidunt lacus lacus, nec pellentesque metus egestas tincidunt.
          Etiam eget velit ipsum. Aenean commodo eu metus sed pharetra. Nam
          vulputate lacus eu urna feugiat, id tempor est laoreet. In id ipsum
          facilisis, blandit mauris eget, posuere dui. Integer erat orci,
          sagittis sit amet condimentum vel, eleifend nec orci. Aliquam congue
          risus eu molestie volutpat.
        </p>

        <h3 id="section2" className="section-header">
          Section 2
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          alienum est, quo facilius vis verbi intellegatur, rationem huius verbi
          faciendi Zenonis exponere. Pisone in eo gymnasio, quod Ptolomaeum
          vocatur, unaque nobiscum Q. Neque solum ea communia, verum etiam paria
          esse dixerunt. Scientiam pollicentur, quam non erat mirum sapientiae
          cupido patria esse cariorem.
        </p>
        <p>
          Septem autem illi non suo, sed populorum suffragio omnium nominati
          sunt. Duo Reges: constructio interrete. Oratio me istius philosophi
          non offendit; Quo plebiscito decreta a senatu est consuli quaestio Cn.
        </p>

        <h3 id="section3" className="section-header">
          Section 3
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Conferam
          tecum, quam cuique verso rem subicias; Uterque enim summo bono
          fruitur, id est voluptate. Re mihi non aeque satisfacit, et quidem
          locis pluribus. Sedulo, inquam, faciam. Sed quamquam negant nec
          virtutes nec vitia crescere, tamen utrumque eorum fundi quodam modo et
          quasi dilatari putant. Semper enim ita adsumit aliquid, ut ea, quae
          prima dederit, non deserat. Sic enim censent, oportunitatis esse beate
          vivere. Duo Reges: constructio interrete. Aliis esse maiora, illud
          dubium, ad id, quod summum bonum dicitis, ecquaenam possit fieri
          accessio
        </p>
        <p>
          Sed quae tandem ista ratio est? Quod autem in homine praestantissimum
          atque optimum est, id deseruit. Nunc reliqua videamus, nisi aut ad
          haec, Cato, dicere aliquid vis aut nos iam longiores sumus. In his
          igitur partibus duabus nihil erat, quod Zeno commutare gestiret.
          Superiores tres erant, quae esse possent, quarum est una sola defensa,
          eaque vehementer. Teneo, inquit, finem illi videri nihil dolere.
          Propter nos enim illam, non propter eam nosmet ipsos diligimus. Sed
          erat aequius Triarium aliquid de dissensione nostra iudicare.
        </p>

        <h3 id="section4" className="section-header">
          Section 4
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Videmusne ut
          pueri ne verberibus quidem a contemplandis rebus perquirendisque
          deterreantur? Quia dolori non voluptas contraria est, sed doloris
          privatio. Hoc etsi multimodis reprehendi potest, tamen accipio, quod
          dant. Piso igitur hoc modo, vir optimus tuique, ut scis, amantissimus.
          Haeret in salebra. Erit enim mecum, si tecum erit.
        </p>
        <p>
          Duo Reges: constructio interrete. Tubulum fuisse, qua illum, cuius is
          condemnatus est rogatione, P. Recte, inquit, intellegis. Atque haec
          coniunctio confusioque virtutum tamen a philosophis ratione quadam
          distinguitur. Non modo carum sibi quemque, verum etiam vehementer
          carum esse?
        </p>

        <h3 id="section5" className="section-header">
          Section 5
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Estne,
          quaeso, inquam, sitienti in bibendo voluptas? Non laboro, inquit, de
          nomine. Satisne vobis videor pro meo iure in vestris auribus
          commentatus? Ad eas enim res ab Epicuro praecepta dantur. Cur post
          Tarentum ad Archytam?
        </p>
        <p>
          Verum hoc idem saepe faciamus. Itaque contra est, ac dicitis; Duo
          Reges: constructio interrete. Ita cum ea volunt retinere, quae
          superiori sententiae conveniunt, in Aristonem incidunt; Itaque eos id
          agere, ut a se dolores, morbos, debilitates repellant. Quasi ego id
          curem, quid ille aiat aut neget. Sed haec ab Antiocho, familiari
          nostro, dicuntur multo melius et fortius, quam a Stasea dicebantur.
          Nam de isto magna dissensio est. Dicam, inquam, et quidem discendi
          causa magis, quam quo te aut Epicurum reprehensum velim.
        </p>

        <h3 id="section6" className="section-header">
          Section 6
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec enim, dum
          metuit, iustus est, et certe, si metuere destiterit, non erit; Aut
          unde est hoc contritum vetustate proverbium: quicum in tenebris? Duo
          Reges: constructio interrete. Summum ením bonum exposuit vacuitatem
          doloris; Praeclare hoc quidem. Duarum enim vitarum nobis erunt
          instituta capienda. Qualem igitur hominem natura inchoavit? Nam quibus
          rebus efficiuntur voluptates, eae non sunt in potestate sapientis.
        </p>
        <p>
          Vidit Homerus probari fabulam non posse, si cantiunculis tantus
          irretitus vir teneretur; Quo studio Aristophanem putamus aetatem in
          litteris duxisse? Non autem hoc: igitur ne illud quidem. Quia nec
          honesto quic quam honestius nec turpi turpius. Quae enim adhuc
          protulisti, popularia sunt, ego autem a te elegantiora desidero.
          Portenta haec esse dicit, neque ea ratione ullo modo posse vivi;
        </p>
      </div>
    </>
  );
};

export default Article;
