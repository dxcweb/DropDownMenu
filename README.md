# pano-loading

react loading组件

## install

```
yarn add pano-loading
或
npm install pano-drop-menu -registry --save
```

## Development

```
yarn
yarn start
```

## Api
### Loading 组件
```
import Loading from "pano-loading";
<Loading visible={loading} />
```
<table class="table table-bordered table-striped">
    <thead>
        <tr>
            <th style="width: 100px;">Name</th>
            <th style="width: 50px;">Type</th>
            <th>Default</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>visible</td>
            <td>Bool</td>
            <td>true</td>
            <td>是否可见</td>
        </tr>
        <tr>
            <td>overlay</td>
            <td>Bool</td>
            <td>12</td>
            <td>是否开启遮罩</td>
        </tr>
        <tr>
            <td>content</td>
            <td>String</td>
            <td>数据加载中</td>
            <td>loading文字内容</td>
        </tr>
    </tbody>
</table>

### loading 函数
```
import {loading} from "pano-loading";
loading.show();
loading.hide();
```
<table class="table table-bordered table-striped">
    <thead>
        <tr>
            <th style="width: 100px;">Name</th>
            <th style="width: 50px;">Type</th>
            <th>Default</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>show</td>
            <td>Function(LoadingProps)</td>
            <td>NULL</td>
            <td>显示Loading，参数：传入Loading 组件的props</td>
        </tr>
        <tr>
            <td>hide</td>
            <td>Function()</td>
            <td>NULL</td>
            <td>隐藏Loading</td>
        </tr>

    </tbody>
</table>

