import { notFound } from 'next/navigation'
import { compileMdx } from 'nextra/compile'
import { Callout, Tabs } from 'nextra/components'
import { evaluate } from 'nextra/evaluate'
import { PageMapItem, TItem, DynamicMeta } from 'nextra';
import { convertToPageMap,mergeMetaWithPageMap, normalizePageMap } from 'nextra/page-map'

import { useMDXComponents as getMDXComponents } from '../mdx-components'
import { assert } from 'console';

export interface RemoteDocsProps {
    user: string,
    repo: string,
    branch?: string,
    docsPath: string,
    basePath: string,
    filePaths: string[],
    meta:DynamicMeta
};


export class RemoteDocs {

    constructor(props: RemoteDocsProps ) {
        this.props = props;
        const filePaths = props.filePaths;
        const converted = convertToPageMap({
            filePaths,
            basePath: props.basePath
        })
        this.basePageMap = converted.pageMap;
        this.mdxPages = converted.mdxPages;

        this.mergedPageMap = mergeMetaWithPageMap(this.basePageMap[0]!, 
                props.meta );

        this.pageMap = normalizePageMap( this.mergedPageMap );
    }
    
    props: RemoteDocsProps;

    basePageMap: TItem[];
    
    mdxPages: {
        [k: string]: string;
    };

    mergedPageMap: TItem[]|TItem;
    pageMap: PageMapItem;
    
    generateStaticParams() {
        console.log( 'generateStaticParams', {doc:this} );
        const params = Object.keys(this.mdxPages).map(route => ({
            slug: route.split('/')
        }))

        return params
    }
}

const { wrapper: Wrapper, ...components } = getMDXComponents({
    $Tabs: Tabs,
    Callout
})

export type PageProps = Readonly<{
    params: Promise<{
        slug?: string[]
    }>
}>

export async function RemoteDocsPage(props: PageProps, docs: RemoteDocs)  {
    const params = await props.params;
    //const route = params.slug?.join('/') ?? ''
    assert( docs !== undefined );
    const route = (params !== undefined && params.slug !== undefined ) ? params.slug.join('/') :  '';
    const filePath = docs.mdxPages[route]

    if (!filePath) {
        notFound()
    }
    const dp = docs.props;
    const response = await fetch(
        `https://raw.githubusercontent.com/${dp.user}/${dp.repo}/${dp.branch}/${dp.docsPath}${filePath}`
    )

    const data = await response.text()
    const rawJs = await compileMdx(data, { filePath })
    const { default: MDXContent, toc, metadata } = evaluate(rawJs, components)

    return (
        <Wrapper toc={toc} metadata={metadata}>
            <MDXContent />
        </Wrapper>
    )
}

/* 

const testCfg: RemoteDocsProps = {
    user: 'graphql-hive',
    repo: 'graphql-eslint',
    branch: '34b722a2a520599ce06a4ddcccc9623b76434089',
    docsPath: 'website/src/pages/docs/',
    basePath: 'graphql-eslint',
    filePaths: [
        'configs.mdx',
        'custom-rules.mdx',
        'getting-started.mdx',
        'getting-started/parser-options.mdx',
        'getting-started/parser.mdx',
        'index.mdx'
    ], 
    meta: {
    index: 'Introduction',
    'getting-started': {
        items: {
        index: 'Overview',
        'parser-options': '',
        parser: ''
        }
    },
    configs: '',
    'custom-rules': ''
    }
};

//export const pageMap = normalizePageMap(eslintPageMap)


const testDoc = new RemoteDocs(testCfg);




export async function Page(props: PageProps) {
    return RemoteDocsPage(props,testDoc);
}


export function generateStaticParams() {
    return testDoc.generateStaticParams();
}
*/