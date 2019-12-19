```
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
```



#### React 源码中经常出现的一些自定义类型的定义如下：

====   React版本 16.12.0   =====

所有包目录都在packages下

====================================== *DOMContainer* ================================

> type **DOMContainer**
>
> 出处：react-dom/src/client/ReactDOM.js

定义类型为：

```js
|(Element & {
    _reactRootContainer: ?_ReactRoot,
    _reactHasBeenPassedToCreateRootDEV: ?boolean,
 })   
|(Document & {
    _reactRootContainer: ?_ReactRoot,
    _reactHasBeenPassedToCreateRootDEV: ?boolean,
})
```



======================================= *_ReactRoot* ==================================

> type **_ReactRoot**
>
> 出处：react-dom/src/client/ReactDOM.js

定义类型为：

```javascript
{
   render(children: ReactNodeList， callback),
   unmount(callback),
   _internalRoot: FiberRoot
}
```



======================================= *FiberRoot* ==================================

> type **FiberRoot**
>
> 出处：react-reconciler/src/ReactFiberRoot.js

定义类型为：

```jsx
{
    tag: RootTag,
    containerInfo: any,
    pendingChildren: any,
    current: Fiber,
    pingCache: | WeakMap<Thenable, Set<ExpirationTime>>
               | Map<Thenable, Set<ExpirationTime>>
        	   | null,
    finishedExpirationTime: ExpirationTime,
    // A finished work-in-progress HostRoot that's ready to be committed.
    finishedWork: Fiber | null,
    // Timeout handle returned by setTimeout. Used to cancel a pending timeout, if
    // it's superseded by a new one.
    timeoutHandle: TimeoutHandle | NoTimeout,
    // Top context object, used by renderSubtreeIntoContainer
    context: Object | null,
    pendingContext: Object | null,
    // Determines if we should attempt to hydrate on the initial mount
    +hydrate: boolean,
    // Node returned by Scheduler.scheduleCallback
    callbackNode: *,
    // Expiration of the callback associated with this root
    callbackExpirationTime: ExpirationTime,
    // Priority of the callback associated with this root
    callbackPriority: ReactPriorityLevel,
    // The earliest pending expiration time that exists in the tree
    firstPendingTime: ExpirationTime,
    // The earliest suspended expiration time that exists in the tree
    firstSuspendedTime: ExpirationTime,
    // The latest suspended expiration time that exists in the tree
    lastSuspendedTime: ExpirationTime,
    // The next known expiration time after the suspended range
    nextKnownPendingLevel: ExpirationTime,
    // The latest time at which a suspended component pinged the root to
    // render again
    lastPingedTime: ExpirationTime,
    // The following attributes are only used by interaction tracing builds.
    // They enable interactions to be associated with their async work,
    // And expose interaction metadata to the React DevTools Profiler plugin.
    // Note that these attributes are only defined when the enableSchedulerTracing flag is    enabled.
    interactionThreadID: number,
    memoizedInteractions: Set<Interaction>,
    pendingInteractionMap: PendingInteractionMap,
    // The follow fields are only used by enableSuspenseCallback for hydration.
    hydrationCallbacks: null | SuspenseHydrationCallbacks,
}
```



======================================= *RootOptions* ==================================

> type **RootOptions**
>
> 出处：react-reconciler/src/ReactDOM.js

定义类型为：

```js
{
   hydrate?: boolean,
   hydrationOptions?: {
    onHydrated?: (suspenseNode: Comment) => void,
    onDeleted?: (suspenseNode: Comment) => void,
  },
}
```



