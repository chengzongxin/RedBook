import React, { useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Dimensions, Image } from "react-native";
import { useLocalStore } from "mobx-react";
// import HomeStore from "@/store/HomeStore";
import HomeStore from "../../store/HomeStore";
import { observer } from "mobx-react";
import icon_heart from "../../assets/images/icon_heart.png";
import icon_heart_empty from "../../assets/images/icon_heart_empty.png";
import FlowList from "@/components/flowlist/FlowList";
import ResizeImage from "@/components/ResizeImage";


const { width: SCREEN_WIDTH } = Dimensions.get("window");

// observer 监听store数据改变
export default observer(() => {
  const store = useLocalStore(() => new HomeStore());

  useEffect(() => {
    store.requestHomeList();
  }, []);

  const refreshNewData = () => {
    store.resetPage()
    store.requestHomeList()
  }

  const loadMoreData = () => {
    store.requestHomeList()
  }

  const renderItem = ({
    item,
    index,
  }: {
    item: ArticleSimple;
    index: number;
  }) => {
    return (
      <View style={styles.item}>
        <ResizeImage uri={item.image} />
        <Text style={styles.itemTitle}>{item.title}</Text>
        <View style={styles.itemUser}>
          <Image style={styles.itemUserImg} source={{uri:item.avatarUrl}} />
          <Text style={styles.itemUserName}>{item.userName}</Text>
          <Image style={styles.itemUserHeart} source={icon_heart_empty} />
          <Text style={styles.itemUserCount}>{item.favoriteCount}</Text>
        </View>
      </View>
    );
  };

  const Footer = () => {
    return <Text style={styles.footer}>没有更多数据</Text>
  }

  return (
    <View style={styles.container}>
      <FlowList
        style={styles.list}
        data={store.homeList}
        renderItem={renderItem}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
        extraData={[store.refreshing]}
        refreshing={store.refreshing} 
        onRefresh={refreshNewData}
        onEndReachedThreshold={0.2}
        onEndReached={loadMoreData}
        ListFooterComponent={<Footer />}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  list: {
    width: "100%",
    height: "100%",
  },
  listContainer:{
    marginTop: 6,
  },
  item: {
    width: (SCREEN_WIDTH - 18) >> 1,
    backgroundColor: "#fff",
    marginLeft: 6,
    marginBottom: 6,
    borderRadius: 8,
    overflow: 'hidden',
    paddingBottom: 6,
  },
  itemTitle: {
    fontSize: 14,
    color: '#333',
    marginHorizontal: 12,
    marginVertical: 4,
  },
  itemUser: {
    flexDirection:'row',
    alignItems:'center',
    marginHorizontal: 12,
  },
  itemUserImg: {
    width:16,
    height:16,
    resizeMode:'cover',
    borderRadius: 8,
  },
  itemUserName: {
    fontSize: 12,
    color:'#999',
    marginLeft: 4,
    flex: 1,
  },
  itemUserHeart: {
    width:16,
    height:16,
    resizeMode:'contain',
  },
  itemUserCount: {
    fontSize:14,
    color:'#999',
    marginLeft:4,
  },
  footer: {
    width:'100%',
    fontSize:14,
    textAlign:'center',
    textAlignVertical:'center',
    color:'999',
    marginVertical: 16,
  }
});
