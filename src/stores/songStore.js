import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useSongStore = defineStore('song-store', () => {
    //state
    const isFullScreen = ref(false);
    const isPlaying = ref(false);
    const listName = ref('')
    const playList = ref([])
    const songIndex = ref(0)
    const currentTime = ref(0)
    const isListShow = ref(false);
    const isCommentsPageShow = ref(false);

    const currentPercentage = computed(() => currentTime.value * 1000 / currentSong.value.songTime)
    const currentSong = computed(() =>
        playList.value[songIndex.value]
    )
    const songCount = computed(() => playList.value.length)

    //method
    function showCommentsPage() {
        isCommentsPageShow.value = true;
    }
    function hiddenCommentsPage() {
        isCommentsPageShow.value = false;
    }
    function showList() {
        isListShow.value = true;
    }
    function hiddenList() {
        isListShow.value = false;
    }
    function setCurrentTime(time) {
        currentTime.value = time;
    }
    function setIndex(i) {
        songIndex.value = i
    }
    function setListName(name) {
        listName.value = name
    }
    function toFullScreen() {
        isFullScreen.value = true;
    }
    function cancelFullScreen() {
        isFullScreen.value = false;
    }
    function play() {
        isPlaying.value = true;
    }
    function pause() {
        isPlaying.value = false;
    }
    function toggle() {
        isPlaying.value = !isPlaying.value;
    }
    function playSongList(songList) {
        playList.value = songList;
    }
    function nextSong() {
        songIndex.value = (songIndex.value + 1) % songCount.value
    }
    function preSong() {
        songIndex.value--;
        if (songIndex.value === -1) {
            songIndex.value = songCount.value - 1;
        }
    }

    //return
    return {
        isFullScreen,
        toFullScreen,
        cancelFullScreen,
        songIndex,
        isPlaying,
        playSongList,
        play,
        pause,
        toggle,
        nextSong,
        preSong,
        currentSong,
        listName,
        setListName,
        setIndex,
        currentTime,
        setCurrentTime,
        currentPercentage,
        isListShow,
        showList,
        hiddenList,
        playList,
        showCommentsPage,
        hiddenCommentsPage,
        isCommentsPageShow
    }
})