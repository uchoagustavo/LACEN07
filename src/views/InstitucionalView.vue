<template>
    <div class="institucional">
        <section class="titulo">
            <h1>Institucional</h1>
            <p>Missão, Visão e Estrutura administrativa do LACEN-SE</p>
        </section>

        <div class="conteudo">
            <section class="conteudo-topo">
                <div class="missao">
                    <img class="seta_menor" src="/assets/img/line_1.svg" alt="line">
                    <div class="texto">
                        <h2>MISSÃO</h2>
                        <p>
                            Atuar com excelência na distribuição de kits diagnósticos, capacitação da rede
                            laboratorial e na prestação de serviços laboratoriais de apoio à Vigilância em
                            Saúde, contribuindo de forma efetiva para a detecção, monitoramento e controle
                            dos agravos em saúde pública em Sergipe.
                        </p>
                    </div>
                </div>
                <div class="visao">
                    <img class="seta_menor" src="/assets/img/line_1.svg" alt="line">
                    <div class="texto">
                        <h2>VISÃO</h2>
                        <p>
                            Ser referência estadual na promoção da saúde pública por meio de uma rede
                            laboratorial qualificada, integrada e comprometida com a inovação, a qualidade
                            e a resposta oportuna às demandas epidemiológicas, sanitárias, ambientais e da
                            atenção básica.
                        </p>
                    </div>
                </div>
            </section>

            <section class="conteudo-meio">
                <div class="estrutura">
                    <img class="seta_maior" src="/assets/img/line_2.svg" alt="line">
                    <div class="conteudo-estrutura">
                        <h2>Estrutura Administrativa</h2>
                        <img class="organograma" src="/assets/img/organograma.svg" alt="Organograma" @click="abrirModal"
                            style="cursor: pointer;" />
                    </div>
                </div>

                <div class="valores">
                    <img class="seta_maior" src="/assets/img/line_2.svg" alt="line">
                    <div class="conteudo-valores">
                        <h2>Princípios e Valores</h2>
                        <ul>
                            <li><img class="arrow" src="/assets/img/arrow-circle-right.svg" alt="arrow">Comprometimento
                            </li>
                            <li><img class="arrow" src="/assets/img/arrow-circle-right.svg" alt="arrow">Eficiência,
                                Eficácia e Efetividade</li>
                            <li><img class="arrow" src="/assets/img/arrow-circle-right.svg" alt="arrow">Humanização</li>
                            <li><img class="arrow" src="/assets/img/arrow-circle-right.svg" alt="arrow">Capacitação
                                Contínua</li>
                            <li><img class="arrow" src="/assets/img/arrow-circle-right.svg" alt="arrow">Qualidade</li>
                            <li><img class="arrow" src="/assets/img/arrow-circle-right.svg" alt="arrow">Transparência
                            </li>
                            <li><img class="arrow" src="/assets/img/arrow-circle-right.svg" alt="arrow">Qualificação
                            </li>
                            <li><img class="arrow" src="/assets/img/arrow-circle-right.svg" alt="arrow">Ética</li>
                            <li><img class="arrow" src="/assets/img/arrow-circle-right.svg" alt="arrow">Biossegurança
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>

        <!-- Modal -->
        <div v-if="modalAberta" class="modal-overlay" @click.self="fecharModal">
            <div class="modal-conteudo">
                <button class="btn-fechar" @click="fecharModal">&times;</button>
                <img src="/assets/img/organograma.svg" alt="Organograma ampliado" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "InstitucionalView",
    data() {
        return {
            modalAberta: false,
        };
    },
    methods: {
        abrirModal() {
            this.modalAberta = true;
        },
        fecharModal() {
            this.modalAberta = false;
        },
    },
};
</script>

<style scoped>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Roboto", sans-serif;
}

.institucional {
    background-color: white;
    font-family: Arial, sans-serif;
}

.titulo {
    text-align: left;
    margin-bottom: 2rem;
    padding: 1.5rem;
    background-color: #0a3c79;
    color: #fff;
}

.titulo h1 {
    font-size: 2rem;
}

.conteudo {
    padding: 1rem 4rem;
}

.conteudo-topo {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    margin-bottom: 2rem;
}

.conteudo-topo div {
    flex: 1;
}

.conteudo-topo h2 {
    color: #003366;
    margin-bottom: 0.5rem;
}

.conteudo-meio {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
}

.missao,
.visao {
    display: flex;
    gap: 4rem;
    align-items: center
}

.seta_menor {
    width: 2px;
    height: auto;

}

.missao .texto {
    display: flex;
    flex-direction: column;
}


.estrutura,
.valores {
    display: flex;
    flex: 1;
    gap: 2rem;
    align-items: center;
    min-width: 300px;
}

.conteudo-estrutura h2 {
    margin-left: 2rem;
}

.seta_maior {
    width: 20px;
    height: 400px;
}

.organograma {
    width: 100%;
    max-width: 80%;
    height: auto;
    display: block;
    margin-top: 2rem;
}

.valores ul {
    margin-top: 2rem;
    list-style: none;
}

.valores li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
}

.arrow {
    width: 1.5rem;
    height: 1.5rem;
    display: block;
}

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

.modal-conteudo {
    position: relative;
    background: white;
    padding: 1rem;
    border-radius: 8px;
    max-width: 90vw;
    max-height: 90vh;
    overflow: auto;
}

.modal-conteudo img {
    max-width: 100%;
    max-height: 80vh;
    display: block;
    margin: 0 auto;
}

.btn-fechar {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    background: transparent;
    border: none;
    font-size: 2rem;
    color: #333;
    cursor: pointer;
}

@media (max-width: 768px) {
    .conteudo {
        padding: 1rem;
    }

    .conteudo-topo,
    .conteudo-meio {
        flex-direction: column;
    }

    .missao,
    .visao,
    .estrutura,
    .valores {
        flex-direction: column;
        align-items: flex-start;
    }

    .seta_menor,
    .seta_maior {
        width: 100%;
        height: 2px;
    }

    .organograma {
        max-width: 100%;
    }

    .valores li {
        font-size: 0.95rem;
    }

    .arrow {
        width: 0.9rem;
        height: 0.9rem;
    }
}

</style>
