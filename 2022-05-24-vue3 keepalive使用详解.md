- keep-alive 源码原理学习笔记https://juejin.cn/post/7069422231387439111
- 滚动条行为控制 https://mp.weixin.qq.com/s/tkX-F5cQHaBP15oCJ2BJZw

- 通过查看vue3 KeepAlive.ts源码,源码路径：https://github.com/vuejs/core/blob/main/packages/runtime-core/src/components/KeepAlive.ts
    // 可以发现通过include 可以配置被显示的组件，
    // 当然也可以设置exclude来配置不被显示的组件,
    // 组件切换时随时控制缓存
    ```javascript
        watch(
        () => [props.include, props.exclude],
        ([include, exclude]) => {
            include && pruneCache(name => matches(include, name))
            exclude && pruneCache(name => !matches(exclude, name))
        },
        // prune post-render after `current` has been updated
        { flush: 'post', deep: true }
        )
    ```

- App.vue根代码
    ```javascript
        <template>
            <div>
                <router-view v-slot="{ Component }">
                <keep-alive :include="keepAliveCache">
                    <component :is="Component" :key="$route.name" />
                </keep-alive>
                <!-- <component :is="Component" :key="$route.name" v-if="!$route.meta.keepAlive" /> -->
                </router-view>
            </div>
        </template>
        <script lang="ts" setup>
        import { computed } from "vue";
        import { useKeepAliverStore } from "@/store";
        const useStore = useKeepAliverStore();
        const keepAliveCache = computed(() => {
        return useStore.caches;
        });

        </script>
    ```
- 通过pinia 来处理include缓存，和保存滚动条位置
    ```javascript
        import { defineStore } from "pinia";

        export const useKeepAliverStore = defineStore("useKeepAliverStore", {
        state: () => ({
            caches: [] as any,
            scrollList: new Map(),
        }),

        actions: {
            add(name: string) {
                this.caches.push(name);
            },
            remove(name: string) {
                console.log(this.caches, 'this.caches')
                this.caches = this.caches.filter((item: any) => item !== name);
                console.log(this.caches, 'this.caches')
            },
            clear() {
                this.caches = []
            }
        }
        });

    ```

- 组件路由进入前进行判断，是否加入缓存
    ```javascript
        import { useRoute, useRouter, onBeforeRouteLeave } from "vue-router";
        import { useKeepAliverStore } from "@/store";
        const useStore = useKeepAliverStore()
        export default {
            name:"record-month",
            beforeRouteEnter(to, from, next) {
                next(vm => {
                    if(from.name === 'Home' && to.name === 'record-month') {
                    useStore.add(to.name)
                    }
                });
            }
        }
        </script>
    ```
- 组件路由离开时判断，是否要移出缓存
    ```javascript
        onBeforeRouteLeave((to, from) => {
            console.log(to.name, "onBeforeRouteLeave");
            if (to.name === "new-detection-detail") {
                console.log(to, from, "不做处理");
            } else {
                useStore.remove(from.name)
                console.log(to, from, "删除组件缓存");
            }
        });
    ```

- 在keepalive两个钩子函数中进行处理scroll位置的缓存,onActivated中获取缓存中的位置， onDeactivated记录位置到缓存
    ```javascript
        onActivated(() => {
            if(useStore.scrollList.get(routeName)) {
                const top = useStore.scrollList.get(routeName)
                refList.value.setScrollTop(Number(top))
            }
            // getExtraInfo();
        });

        onDeactivated(() => {
            const top = refList.value.getScrollTop()
            useStore.scrollList.set(routeName, top)
        });
    ```
- 这里的设置scrollTop使用了原生javascript的api
    ```javascript
        const setScrollTop = (value: any) => {
            const dom = document.querySelector('.van-pull-refresh')
            dom!.scrollTop = value
        }
    ```
