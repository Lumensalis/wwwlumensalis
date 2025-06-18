import { RemoteDocsProps, RemoteDocs, RemoteDocsPage, PageProps } from '@/components/nextraRemote';

//import { ReactElement } from 'react'
//import  'JSX';

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

export const gqlintRepoDocs = new RemoteDocs( testCfg);


export default async function Page(props: PageProps)  {
    return (
    //<RemoteDocsPage props={props} docs={gqlintRepoDocs}/>
        RemoteDocsPage(props, gqlintRepoDocs)
    )
}

export function generateStaticParams() {
    return gqlintRepoDocs.generateStaticParams();
}