<template>
    <div class="bg-light min-h-screen overflow-x-hidden relative z-0">
        <Particles id="tsparticles" :options="particles_options" />
        <Header />
        <Nuxt />
    </div>
</template>

<script>
export default {
    data() {
        return {
            particles_options: {
                background: {
                    color: {
                        value: "#f2f2f2"
                    }
                },
                fpsLimit: 60,
                interactivity: {
                    detectsOn: "canvas",
                    events: {
                        onClick: {
                            enable: false
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse"
                        },
                        resize: true
                    },
                    modes: {
                        bubble: {
                            distance: 400,
                            duration: 2,
                            opacity: 0.8,
                            size: 10
                        },
                        push: {
                            quantity: 4
                        },
                        repulse: {
                            distance: 100,
                            duration: 0.4
                        }
                    }
                },
                particles: {
                    color: {
                        value: "#222222"
                    },
                    links: {
                        color: "#222222",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1
                    },
                    collisions: {
                        enable: true
                    },
                    move: {
                        direction: "bottom",
                        enable: true,
                        outMode: "bounce",
                        random: false,
                        speed: 2,
                        straight: false
                    },
                    number: {
                        density: {
                            enable: true,
                            value_area: 800
                        },
                        value: 100
                    },
                    opacity: {
                        value: 0.5
                    },
                    shape: {
                        type: "circle"
                    },
                    size: {
                        random: true,
                        value: 5
                    }
                },
                detectRetina: true
            }
        };
    }
};
</script>

<style>
#tsparticles {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
    opacity: 0.48;
    z-index: -10;
}
</style>
