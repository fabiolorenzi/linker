const target = new URLSearchParams(window.location.search).get("target") || null;

if (target == "spotify") {
    window.location.replace("https://open.spotify.com/artist/76kA5l0oToh6QDSlMxLpwD");
} else if (target == "the-worst-side-ep") {
    window.location.replace("https://open.spotify.com/album/6gvl2NSdPH4xzCUujK7MeU?si=VPl_Iqr7RQSW_uG7K_Uyhg");
};