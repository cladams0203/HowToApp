import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    moreButtonText: {
        color: 'white',
        fontFamily: 'Martel-Bold',
        fontSize: 22,
        textAlign: 'center',
        paddingTop:5,
        marginTop: 5
    },
    moreButton: {
        backgroundColor: '#fdba77',
        borderRadius: 30,
        width: '40%',
        height: 50,
    },
    moreButtonContainer: {
        flexDirection: "column",
        alignItems: "center",
        marginTop: 20,
        marginBottom: 20
    },
    keywordButton: {
        backgroundColor: '#36827e',
        borderRadius: 30,
        width: '40%',
        height: 50
    },
    subTopicButtonContioner: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 30
    },
    trendingButtonText: {
        color: 'white',
        fontFamily: 'Martel-Bold',
        fontSize: 13,
        textAlign: 'center',
        paddingTop:5,
        marginTop: 10
    },
    trendingButton: {
        backgroundColor: '#fdba77',
        borderRadius: 30,
        width: '40%',
        height: 50
    },
    topicSearch: {
        backgroundColor: 'white',
        width: '92%',
        alignSelf: "center",
        borderRadius: 38,
        marginTop: 10,
        borderColor: '#61bdb8',
        borderWidth: 2,
        
    },
    topicHeading: {
        color: '#2a4565',
        fontFamily: 'Martel-Bold',
        fontSize: 36,
        textAlign: "center",
        marginTop: 40
    },
    footerTextContainer: {
        alignItems: "center",
        paddingBottom: 10
    },
    footerContainer: {
        width: '100%',
        backgroundColor: '#36827e',
        paddingTop: 10,
        flexDirection: "row",
        justifyContent: "space-around",
    },
    footerHeading: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'Martel-Bold'
    },
    footerText: {
        color: 'white',
        fontFamily: 'Martel-Regular',
        fontSize: 13
    },
    topicText: {
        color: '#2a4565',
        fontFamily: 'Martel-Bold',
        fontSize: 13
    },
    topicItemContainer: {
        width: '45%',
        marginTop: 25,
        flexDirection: "column",
        alignItems: "center",
      
    },
    topicsContainer: {
        flexWrap: "wrap",
        width: '100%',
        flexDirection: 'row',
        justifyContent:"space-evenly",
        marginBottom: 50
    },
    buttonContainer: {
        flexDirection:'row',
        justifyContent: "space-evenly",
        marginTop: 30
    },
    toggleButtonText: {
        color: 'white',
        fontFamily: 'Martel-Bold',
        fontSize: 18,
        textAlign: 'center',
        paddingTop:5
    },
    toggleText: {
        fontSize: 22,
        fontFamily: 'Martel-Bold'
    },
    toggleButton: {
        backgroundColor: '#fdba77',
        borderRadius: 20,
        width: '40%',
    },
    draftText2: {
        color: 'white',
        fontSize: 15,
        width: '40%',
        textAlign: "center",
        zIndex: 1
    },
    draftText1: {
        color: 'white',
        fontFamily: 'Martel-Bold',
        fontSize: 18,
        zIndex: 1
    },
    draftHeading: {
        color: 'white',
        zIndex: 1,
        fontFamily: 'Martel-Bold',
        fontSize: 44
    },
    draftContainer: {
        flexDirection: "column",
        backgroundColor: '#275e5b',
        height: 220,
        alignItems: "center",
        justifyContent: "center"
    },
    creatorText: {
        zIndex: 1,
        fontFamily: 'Martel-Bold',
        fontSize: 18,
        width: '80%',
        textAlign: 'center',
        alignSelf: "center"
    },
    creatorHeading: {
        color: '#2a4565',
        fontSize: 44,
        fontFamily: 'Martel-Bold',
        zIndex: 1
    },
    creatorContainer: {
        width: '100%',
        height: 200,
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        zIndex: 1,
        marginTop: 10
    },
    creatorImage: {
        width: 170,
        height:170,
        zIndex: 1,
        position: 'absolute',
    },
    mainContainer: {
        backgroundColor: '#f1f9f9',
        marginBottom:50
    },
    container: {
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: '#f1f9f9'
    },
    heading: {
        fontSize: 36,
        fontFamily: 'Martel-Bold',
        color: '#2a4565'
    },
    welcomeText: {
        fontSize: 22,
        fontFamily: 'Martel-Regular',
        color: '#2a4565',
        textAlign: "center",
        width: '80%'
    },
    startedButton: {
        backgroundColor: '#fdba77',
        width: '90%',
        borderRadius: 32,
        marginTop: 40
    },
    buttonText: {
        color: 'white',
        textAlign: "center",
        fontSize: 22,
        fontFamily: 'Martel-Bold',
        marginTop: 10,
        marginBottom: 8
    },
    browse: {
        color: '#2a4565',
        fontFamily: 'Martel-Regular',
        fontSize: 18,
        marginTop: 10
    },
    searchContainer: {
        backgroundColor: '#36827E',
        flexDirection: "column",
        alignItems: "center",
        marginTop: 10,
    },
    searchHeading: {
        color: '#e6edf4',
        fontSize:22,
        fontFamily: 'Martel-Regular',
        marginTop: 15
    },
    searchInput: {
        backgroundColor: '#f1f9f9',
        width: '92%',
        alignSelf: "center",
        borderRadius: 38,
        marginTop: 10,
        height: 50
    },
    searchText: {
        color: '#e6edf4',
        marginTop: 10,
        marginBottom: 30,
        fontSize: 18,
        fontFamily: 'Martel-Regular',
        width: '55%',
        alignSelf: 'flex-end'
    }
})