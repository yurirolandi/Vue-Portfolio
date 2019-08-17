<template>
      <div class="about-conteudo">

    <div class="about-conteiner">
      <h3 class="about-subtitulo">
       {{ titulo }}
      </h3>
      <p class="about-text">
        Olá, eu sou Yuri Rolandi. Atualmente trabalho na empresa Medgrupo, onde ajudo a criar apostilas em HTML e CSS
        utilizando no dia a dia o Git, Kanbanize, Sass, JavaScript e metodologia ágil para gestão e planejamento de
        projetos de software (SCRUM), o framework Vue.js e React são os meus preferios para utilização diaria;
      </p>
      <div class="about-media">
        <ul class="media-conteudo">
          <li class="media-item"><a href="https://github.com/yurirolandi" target="_blank"><i class="fa fa-github"></i>Git Hub</a></li>
          <li class="media-item"><a href="../../assets/CurriculumYuriRolandi.pdf" download><i class="fa fa-download"></i>Baixar - Curriculo</a></li>
        </ul>
      </div>
    </div>


    <div class="about-skill">
      <h2 class="skill-titulo">
        Skills
      </h2>

      <div class="skill-box">
        <div class="skill-conteiner">
          <h4 class="skill-item">Html</h4>
          <div class="html-bar"><img src="../../assets/svgs/html5-brands.svg"></div>

        </div>

        <div class="skill-conteiner">
          <h4 class="skill-item">Css</h4>
          <div class="css-bar"><img src="../../assets/svgs/css3-alt-brands.svg"></div>
        </div>
        
        <div class="skill-conteiner">
          <h4 class="skill-item">JavaScript</h4>
          <div class="js-bar"><img src="../../assets/svgs/js-square-brands.svg"></div>
        </div>

        <div class="skill-conteiner">
          <h4 class="skill-item">Vue.Js</h4>
          <div class="vue-bar"><img src="../../assets/svgs/vuejs-brands.svg"></div>
        </div>

        <div class="skill-conteiner">
          <h4 class="skill-item">Git</h4>
          <div class="git-bar"><img src="../../assets/svgs/github-brands.svg"></div>
        </div>

        <div class="skill-conteiner">
          <h4 class="skill-item">React</h4>
          <div class="react-bar"><img src="../../assets/svgs/react-brands.svg"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'PainelAbout',
    data() {
        return{
            titulo: 'Desenvolvedor Front-End'
        }
    }
}
</script>

<style lang="scss">
@import '../../assets/scss/main';
.about-conteudo {
    display: flex;
    padding-bottom: 90px !important;
    justify-content: space-around;
    flex-wrap: wrap;

    .about-conteiner {
      display: flex;
      flex-direction: column;
      padding: 0 5px;
      justify-content: left;

      .about-subtitulo {
        font-size: 1.2em;
        text-align: left;
        align-self: left;
        color: $color-branca;
        margin-bottom: 10px;
        font-family: RobotoRegular, sans-serif;
      }

      .about-text {
        font-size: 1em;
        width: 70%;
        color: $color-branca;
        font-family: RobotoRegular, sans-serif;
        line-height: 1.6;
        text-align: justify;
        width: 500px;
      }

      .about-media {
        display: flex;
        flex-wrap: wrap;
        margin: 20px 0;

        .media-conteudo {
          list-style: none;
        }

        .media-item {
          display: inline-block;
          border: 2px solid $color-base;
          padding: 10px;
          margin: 10px 10px 0 0;
          border-radius: 4px;
          cursor: pointer;
          &:hover {
            background-color: $color-base;
            color: $color-primaria;
          }

          a {
            text-decoration: none;
            color: $color-branca;
            font-family: Montserrat, sans-serif;

            i {
              font-size: 25px;
              color: $color-secundaria;
              margin: 0 10px 0 0;
            }
          }
        }
      }
    }

    .about-skill {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-self: center;
      flex-wrap: wrap;
      width: 400px;
      max-width: 700px;
      height: 100%;
      margin-bottom: 30px;

      .skill-titulo {
        font-size: 1.5em;
        padding: 6px 0 10px 0;
        border-bottom: 4px solid $color-base;
        font-family: roboto, sans-serif;
        width: fit-content;
        align-self: center;
        color: $color-branca;
        margin-bottom: 10px;
      }

      .skill-item {
        color: $color-branca;
        font-size: 1.1em;
        align-self: center;
        margin: 12px 10px 10px 10px;
        font-family: robotoRegular, sans-serif;
      }

      .skill-box {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        .skill-conteiner {
          display: flex;
          align-items: center;
          justify-content: space-between;

          border: 2px solid $color-branca;
          border-radius: 4px;
          background-color: $color-base;
          margin: 10px 5px 0 0;
          width: 190px;
          padding: 5px 10px;

          .html-bar,
          .css-bar,
          .js-bar,
          .vue-bar,
          .git-bar,
          .react-bar {
            width: 36px;
            margin: 5px;
            height: 36px;
            img {
              width: 35px;
              height: 33px;
            }
          }
        }
      }
    }
  }


  @media only screen and (max-width: 320px) {
  #about {
    .about-conteudo {
      .about-conteiner {
        align-items: center;
        .about-text {
          width: 80% !important;
        }
      }
    }

    .about-media{
      margin: 20px 40px !important;
    }
  }
}


@media only screen and (max-width: 780px) {
  #about {
    .about-conteudo {
      .about-conteiner {
        align-items: center;
        .about-text {
          width: 60% !important;
        }
      }
    }

    .about-media{
      margin: 20px 40px !important;
    }
  }
}


</style>